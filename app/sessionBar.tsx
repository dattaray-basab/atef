import { SessionProvider } from 'next-auth/react';
import React from 'react'
import AuthBar from './authBar';

const SessionBar = () => {
  return (
    <SessionProvider>
      <AuthBar />
    </SessionProvider>
  );

}

export default SessionBar;