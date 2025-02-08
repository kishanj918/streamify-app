import { createClient } from "@supabase/supabase-js";
import { type Database, Tables } from "./database.types";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
export type User = Tables<"users">;
export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);
