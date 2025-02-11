"use client";

import OverlayLoader from "@/components/ui/loader";
import logOutUser from "@/lib/calls/logOutUser";
import { redirect } from "next/navigation";

import { useState } from "react";

export default function LogoutButton() {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={async () => {
          setLoading(true);
          const result = await logOutUser();
          if (result) {
            redirect("/login");
          }
        }}
      >
        logout
      </button>
      <OverlayLoader loading={loading} />;
    </>
  );
}
