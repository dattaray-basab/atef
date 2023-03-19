import Header from "./header";
import type { ReactNode } from "react";

export default function LearnLayout({ children }: { children: ReactNode }) {
  return (
    <span className='flex flex-row'>
      <Header />
      <main>
        <section className='w-3/4'>
          <div>{children}</div>
        </section>
      </main>
    </span>
  );
}
