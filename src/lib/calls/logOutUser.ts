import supabase from "../supabase/client";
import { type CallError } from "./isCallError";

export default async function logOutUser(): Promise<CallError | boolean> {
  const result = await supabase.auth.signOut({});
  if (result.error) return { error: result.error.message };

  return true;
}
