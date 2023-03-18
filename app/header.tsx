"use client";

import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./header.module.css";

import { SessionProvider } from "next-auth/react";
import SessionBar from "./sessionBar";

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  return (
    <header>
      <SessionProvider>
        <SessionBar />
      </SessionProvider>
      <nav>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href='/'>Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/admin'>Admin</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
