"use client";
import fetchUsers from "@/lib/calls/fetchUsers";

export default function Button() {
  return (
    <button
      onClick={async () => {
        const data = await fetchUsers();
        console.log(data);
      }}
    >
      fetchData
    </button>
  );
}
