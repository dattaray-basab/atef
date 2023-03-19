import Header from "./header";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div >
      <Header />

      <main>{children}</main>
    </div>
  );
}
