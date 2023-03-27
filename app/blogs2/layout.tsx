import Header from "./header";
import type { ReactNode } from "react";

export default function BlogsLayout({ children }: { children: ReactNode }) {
  return (
    <div className='flex gap-2 flex-row mx-1  bg-white text-black '>
      <Header />
      <main>
        <section>
          <div className='py-4 sm:px-6 lg:px-8'>{children}</div>
        </section>
      </main>
    </div>
  );
}
