import { createClient } from '@supabase/supabase-js';

// Direct Supabase configuration
const supabaseUrl = 'https://soewlqmskqmpycaevhoc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvZXdscW1za3FtcHljYWV2aG9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwNDExODksImV4cCI6MjA3ODYxNzE4OX0.0CAOUF-SVUIx5udgzNBkrggovWaafHWYFN1j-HzYTFU';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string;
          username: string | null;
          trial_start: string | null;
          trial_end: string | null;
          trial_used: boolean;
          avatar_url: string | null;
          bio: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string;
          username?: string | null;
          trial_start?: string | null;
          trial_end?: string | null;
          trial_used?: boolean;
          avatar_url?: string | null;
          bio?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string;
          username?: string | null;
          trial_start?: string | null;
          trial_end?: string | null;
          trial_used?: boolean;
          avatar_url?: string | null;
          bio?: string | null;
          updated_at?: string;
        };
      };
      dreams: {
        Row: {
          id: string;
          user_id: string;
          dream_text: string;
          analysis_text: string | null;
          image_url: string | null;
          status: string;
          is_public: boolean;
          likes_count: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          dream_text: string;
          analysis_text?: string | null;
          image_url?: string | null;
          status?: string;
          is_public?: boolean;
          likes_count?: number;
          created_at?: string;
        };
        Update: {
          dream_text?: string;
          analysis_text?: string | null;
          image_url?: string | null;
          status?: string;
          is_public?: boolean;
          likes_count?: number;
        };
      };
      messages: {
        Row: {
          id: string;
          sender_id: string;
          receiver_id: string;
          message_text: string;
          read_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          sender_id: string;
          receiver_id: string;
          message_text: string;
          read_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          message_text?: string;
          read_at?: string | null;
          updated_at?: string;
        };
      };
    };
  };
};
