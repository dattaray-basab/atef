import Header from "./header";
import type { ReactNode } from "react";
import "../styles/globals.css";
import Footer from "./footer";
import Provider from "../components/auth_session/provider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <div className=' bg-gray-900 text-white'>
        <Header />
        <Provider>
          <div className= ' text-black m-1'>{children}</div>
        </Provider>
        <Footer />
      </div>
    </html>
  );
}
