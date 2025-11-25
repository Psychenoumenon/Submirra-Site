import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // Silent warning - don't expose configuration details
  if (import.meta.env.DEV) {
    console.warn('Authentication service configuration missing.');
  }
}

// Create Supabase client
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key',
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  }
);

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string;
          updated_at?: string;
        };
      };
      dreams: {
        Row: {
          id: string;
          user_id: string;
          dream_text: string;
          analysis_text: string;
          image_url: string;
          status: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          dream_text: string;
          analysis_text?: string;
          image_url?: string;
          status?: string;
          created_at?: string;
        };
        Update: {
          dream_text?: string;
          analysis_text?: string;
          image_url?: string;
          status?: string;
        };
      };
    };
  };
};
