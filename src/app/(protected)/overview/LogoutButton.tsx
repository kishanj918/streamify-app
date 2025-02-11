"use client";

import OverlayLoader from "@/components/ui/loader";
import fetchData from "@/lib/calls/fetchData";

import { useState } from "react";

export default function LogoutButton() {
  const [loading] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={async () => {
          const result = await fetchData();
          console.log(result);
          // setLoading(true);
          // const result = await logOutUser();
          // if (result) {
          //   redirect("/login");
          // }
        }}
      >
        logout
      </button>
      <OverlayLoader loading={loading} />;
    </>
  );
}
