// import { SessionProvider } from "next-auth/react"
import "./styles.css";

import type { AppProps } from "next/app";

import Provider from "../components/auth_session/provider";

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}
