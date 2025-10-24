import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mpdbawjuffjwjqfpthyq.supabase.co"  ;
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wZGJhd2p1ZmZqd2pxZnB0aHlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEwNjQzMTksImV4cCI6MjA3NjY0MDMxOX0.QoKVBbh-gYGQKVxiyPWfXvXlhpYMz1yyshfz5Uk0NWs";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
