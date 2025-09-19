// src/contexts/AuthContext.tsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { AuthContext } from './auth-utils';
import { User } from '@supabase/supabase-js';
import i18n from '../i18n'; // 👈 ADD THIS — adjust path if needed

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAdminStatus = (user: User | null) => {
    setIsAdmin(!!user); // Update with real role logic in production
  };

  // 👇 NEW: Initialize language based on user/profile/browser
  const initializeLanguage = async (currentUser: User | null) => {
    let detectedLang = 'en';

    try {
      // 1. If logged in → fetch from Supabase profile
      if (currentUser) {
        const { data: profile, error } = await supabase
          .from('profiles')
          .select('locale')
          .eq('id', currentUser.id)
          .single();

        if (error) {
          console.warn('Could not fetch profile locale:', error.message);
        } else if (profile?.locale) {
          detectedLang = profile.locale;
        }
      }

      // 2. If not logged in → try localStorage
      if (!currentUser) {
        const savedLang = localStorage.getItem('i18nextLng');
        if (savedLang && ['en', 'ar'].includes(savedLang)) {
          detectedLang = savedLang;
        }
        // 3. Else → use browser language
        else {
          const browserLang = navigator.language.split('-')[0];
          if (['en', 'ar'].includes(browserLang)) {
            detectedLang = browserLang;
          }
        }
      }

      // Apply language if different
      if (i18n.language !== detectedLang) {
        await i18n.changeLanguage(detectedLang);
        console.log(`🌐 Initialized language: ${detectedLang}`);
      }
    } catch (err) {
      console.error('Failed to initialize language:', err);
    }
  };

  useEffect(() => {
    const initializeAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      const currentUser = session?.user ?? null;

      setUser(currentUser);
      checkAdminStatus(currentUser);

      // 👇 INITIALIZE LANGUAGE AFTER SETTING USER
      await initializeLanguage(currentUser);

      setLoading(false);
    };

    initializeAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      checkAdminStatus(currentUser);

      // 👇 RE-INITIALIZE LANGUAGE ON AUTH STATE CHANGE
      await initializeLanguage(currentUser);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;

    const maxRetries = 15;
    let retries = 0;

    while (retries < maxRetries) {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
        checkAdminStatus(session.user);

        // 👇 INIT LANGUAGE AFTER SIGN IN
        await initializeLanguage(session.user);

        return;
      }
      await new Promise(resolve => setTimeout(resolve, 200));
      retries++;
    }

    throw new Error('Failed to establish session after sign-in');
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;

    setUser(null);
    setIsAdmin(false);

    // 👇 OPTIONAL: Reset to default or browser language on sign out
    const fallbackLang = navigator.language.split('-')[0] === 'ar' ? 'ar' : 'en';
    if (i18n.language !== fallbackLang) {
      await i18n.changeLanguage(fallbackLang);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};