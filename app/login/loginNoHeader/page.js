"use client";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    <div>
      <h1>No Header Login</h1>
      <button onClick={() => router.push("/login")}>Go to login page</button>
    </div>
  );
};

export default page;
