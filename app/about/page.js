"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    <>
      <h1>about page</h1>
      <br />
      <br />
      <button onClick={() => router.push("/about/aboutStudent")}>
        About Student
      </button>
      <button onClick={() => router.push("/about/aboutCollege")}>
        About College
      </button>
      <br />
      <br />
      <Link href="/">Go to dashboard</Link>
    </>
  );
};

export default page;
