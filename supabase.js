/*
Supabase integration placeholder.
Do not put a service_role key in browser code.
For a frontend-only client, use the project's URL and publishable/anon key,
and enforce authorization with RLS plus trusted server/database functions.
Install the Supabase JS client using your chosen build tool, or use the official
browser CDN only after reviewing its current documentation.
*/
export const supabaseConfig = {
  url: "", // Supabase Project URL
  publishableKey: "" // publishable/anon key only; never service_role
};
export function isSupabaseConfigured() {
  return Boolean(supabaseConfig.url && supabaseConfig.publishableKey);
}
