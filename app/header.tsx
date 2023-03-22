"use client";

import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";

// import { SessionProvider } from "next-auth/react";

// import AuthBar from "./authBar";
import Authenticator from "../components/auth_session/authenticator";
import Provider from "../components/auth_session/provider";

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  return (
    <header>
      <div className='flex p-4 m-auto space-x-24 justify-self-stretch align-middle '>
        {/* <h2 className='text-2xl text-blue-500 font-bold '>TAL</h2> */}
        {/* <SessionProvider>
          <AuthBar />
        </SessionProvider> */}
        <Provider>
          <Authenticator></Authenticator>
        </Provider>
      </div>
      <div>
        <nav>
          <ul className='flex flex-row gap-10'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/learn'>Atef's Learning Site</Link>
            </li>
            <li>
              <Link href='/ws'>Work Space</Link>
            </li>
            <li>
              <Link href='/admin'>Admin</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
