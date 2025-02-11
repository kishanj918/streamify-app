"use server";
import { type User as AuthUser } from "@supabase/supabase-js";
import { type CallError } from "./isCallError";
import { createClient } from "../supabase/server";

export default async function signInUser(
  email: string,
  password: string
): Promise<AuthUser | CallError> {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) return { error: error.message };
  if (!user) return { error: "Something went wrong! Try Again." };
  return user;
}
