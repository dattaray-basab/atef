import Header from "./header";
import Footer from "./footer";
import type { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* <SessionProvider> </SessionProvider> */}
      <Header />

      <main>{children}</main>
      <Footer />
    </>
  );
}
