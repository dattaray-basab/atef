// import Image from "next/image";
// import Link from "next/link";
import "styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html>
      <head />
      <body>
        <div className="mx-auto  max-w-2xl px-6">
          {/* {header} */}
          {children}
          {/* {footer} */}
        </div>
      </body>
    </html>
  );
}
