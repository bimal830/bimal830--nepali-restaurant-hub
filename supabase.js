
const SUPABASE_URL = "https://eadldvvjmgcwnjdqvicn.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_7r5KyzWuO21p_FoD1OYdNA_ZjgeQkZv";

let supabaseClient = null;

if (window.supabase && window.supabase.createClient) {
  supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );

  console.log("Supabase client तयार भयो।");
} else {
  console.error("Supabase library लोड भएन।");
}
