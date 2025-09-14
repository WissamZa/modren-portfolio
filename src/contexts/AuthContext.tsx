// src/contexts/AuthContext.tsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { AuthContext} from './auth-utils';
import { User } from '@supabase/supabase-js';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAdminStatus = (user: User | null) => {
    // For demo: all authenticated users are admins
    // In production: query a `users` table or check `app_metadata.role`
    setIsAdmin(!!user); // or more robust logic like: user?.app_metadata?.role === 'admin'
  };

  useEffect(() => {
    const initializeAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      checkAdminStatus(session?.user ?? null);
      setLoading(false);
    };

    initializeAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      checkAdminStatus(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;

    const maxRetries = 15; // ~3 seconds at 200ms intervals
    let retries = 0;

    while (retries < maxRetries) {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
        checkAdminStatus(session.user);
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
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};