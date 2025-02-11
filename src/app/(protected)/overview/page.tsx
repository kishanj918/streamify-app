import { createClient } from "@/lib/supabase/server";
import LogoutButton from "./LogoutButton";
export default async function Home() {
  const client = await createClient();
  const data = await client.auth.getUser();

  console.log(data);
  return <LogoutButton />;
}
