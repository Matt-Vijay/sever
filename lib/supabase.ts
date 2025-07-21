import { createClient } from '@supabase/supabase-js';
import { useAuth } from '@clerk/nextjs';

const useSupabaseClient = () => {
  const { getToken } = useAuth();

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: {
        fetch: async (url, options = {}) => {
          const token = await getToken({ template: 'supabase' });

          const headers = new Headers(options.headers);
          headers.set('Authorization', `Bearer ${token}`);

          return fetch(url, {
            ...options,
            headers,
          });
        },
      },
    }
  );

  return supabase;
};

export default useSupabaseClient;
