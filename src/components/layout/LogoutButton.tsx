"use client";
import { useState } from "react";
import { Button } from "@components/ui/button";
import { DynamicIcon } from "lucide-react/dynamic";
import logOutUser from "@lib/calls/logOutUser";
import { redirect } from "next/navigation";
import OverlayLoader from "@components/ui/loader";
const LogoutButton = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Button
        variant={"outline"}
        onClick={async () => {
          setLoading(true);
          const result = await logOutUser();
          if (result) {
            setLoading(false);
            redirect("/login");
          }
        }}
      >
        Logout <DynamicIcon name="log-out" />
      </Button>
      <OverlayLoader loading={loading} />
    </>
  );
};
export default LogoutButton;
