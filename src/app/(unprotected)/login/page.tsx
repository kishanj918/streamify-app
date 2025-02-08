import { redirect } from "next/navigation";
import fetchUsers from "@/lib/calls/fetchUsers";
import Button from "./Button";
import { LoginForm } from "@components/forms/login-form";
import React from "react";
export default async function Home() {
  // const users = await fetchUsers();
  // if (!users) redirect("/error");
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
