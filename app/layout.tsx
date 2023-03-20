import Header from "./header";
import type { ReactNode } from "react";
import "../styles/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <div>
        <Header />

        <main>{children}</main>
      </div>
    </html>
  );
}
