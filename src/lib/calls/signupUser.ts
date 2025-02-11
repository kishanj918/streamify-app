"use server";
import { supabase } from "@/lib/supabase1";
import { type User as AuthUser } from "@supabase/supabase-js";
import { CallError } from "./isCallError";

export default async function signUpUser(
  email: string,
  password: string
): Promise<AuthUser | CallError> {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) return { error: error.message };
  if (!data.user) return { error: "Something went wrong! Try Again." };
  return data.user;
}
