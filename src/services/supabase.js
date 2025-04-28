import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dfrcxzteravfxlfqctyq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmcmN4enRlcmF2ZnhsZnFjdHlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyOTYyNTIsImV4cCI6MjA2MDg3MjI1Mn0.5Ghh3IdAlfyfTfIqk5E9wYS2wxaMie4NDjOMJT1Ol1I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
