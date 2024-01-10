"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    <>
      <h1>login page</h1>
      <Link href="/">Go to dashboard</Link>
      <br />
      <br />
      <button onClick={() => router.push("/login/loginStudent")}>
        Student login
      </button>
      <button onClick={() => router.push("/login/loginTeacher")}>
        Teacher login
      </button>
    </>
  );
};

export default page;
