import Header from "./header";
import type { ReactNode } from "react";

export default function LearnLayout({ children }: { children: ReactNode }) {
  return (
    <span className='flex gap-2 flex-row mx-10'>
      <Header />
      <main>
        <section >
          <div>{children}</div>
        </section>
      </main>
    </span>
  );
}
