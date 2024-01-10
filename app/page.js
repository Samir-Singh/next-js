"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <>
      <h1>Dashboard</h1>
      <br />
      <Link href="/login">Go to login page</Link>
      <br />
      <br />
      <Link href="/about">Go to about page</Link>
      <br />
      <br />
      <button onClick={() => router.push("/login")}>Go to login page</button>
    </>
  );
}
