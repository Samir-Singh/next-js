"use client";
import { Inter } from "next/font/google";
import style from "./login.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function LoginLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        {pathname !== "/login/loginNoHeader" && (
          <ul className={style.ul_tag}>
            <li className={style.li_tag}>
              <h1>Login Layout</h1>
            </li>
            <li className={style.li_tag}>
              <Link href="/login">Login Page</Link>
            </li>
            <li className={style.li_tag}>
              <Link href="/login/loginStudent">Student Login</Link>
            </li>
            <li className={style.li_tag}>
              <Link href="/login/loginTeacher">Teacher Login</Link>
            </li>
            <li className={style.li_tag}>
              <Link href="/login/loginNoHeader">No Header Login</Link>
            </li>
          </ul>
        )}
        {children}
      </body>
    </html>
  );
}
