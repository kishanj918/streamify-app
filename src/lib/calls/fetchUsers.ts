"use server";

import { createClient } from "../supabase/server";
import type { User } from "../supabase/types";

export default async function fetchUsers(): Promise<User[] | null> {
  const supabase = await createClient();
  const { data: users, error } = await supabase.from("users").select();
  if (error) return null;
  return users;
}
