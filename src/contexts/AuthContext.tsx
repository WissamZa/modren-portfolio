import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
      // Fix: Convert undefined to null using nullish coalescing
      setUser(session?.user ?? null);
      checkAdminStatus(session?.user ?? null); // Fixed: Convert undefined to null
      setLoading(false);
    };

    initializeAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      // Fix: Convert undefined to null using nullish coalescing
      setUser(session?.user ?? null);
      checkAdminStatus(session?.user ?? null); // Fixed: Convert undefined to null
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;

    // Poll getSession() until user is available (max 3s timeout)
    const maxRetries = 15; // ~3 seconds at 200ms intervals
    let retries = 0;

    while (retries < maxRetries) {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
        checkAdminStatus(session.user);
        return; // Success!
      }
      await new Promise(resolve => setTimeout(resolve, 200));
      retries++;
    }

    // Fallback: if still no session, assume something went wrong
    throw new Error('Failed to establish session after sign-in');
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;

    // Immediately reset local state on sign-out
    setUser(null);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};