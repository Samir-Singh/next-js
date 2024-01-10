import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>Teacher Login</h1>
      <Link href="/login">Go to login page</Link>
    </div>
  );
};

export default page;
