import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react'

const AuthBar = () => {
      const { data: session } = useSession();
  return (
    <div>
      {!session && (
        <a
          href={`/api/auth/signin`}
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}>
          Sign in
        </a>
      )}
      {session?.user && (
        <a
          href={`/api/auth/signout`}
          onClick={(e) => {
            e.preventDefault();
            signOut();
          }}>
          Sign out
        </a>
      )}
    </div>
  );
}

export default AuthBar