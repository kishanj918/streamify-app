"use server";
import { supabase, type User } from "@lib/supabase";

export default async function fetchUsers(): Promise<User[] | null> {
  const { data: users, error } = await supabase.from("users").select();
  if (error) return null;
  return users;
}
