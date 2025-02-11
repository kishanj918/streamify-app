"use server";
import { createClient } from "../supabase/server";
import { type CallError } from "./isCallError";

export default async function logOutUser(): Promise<CallError | boolean> {
  const supabase = await createClient();
  const result = await supabase.auth.signOut({});
  if (result.error) return { error: result.error.message };

  return true;
}
