import Link from "next/link";


export default function Header() {
  return (
    <header>
      <h3>The Atef Learning Site</h3>
      <section className='flex'>
        <aside className='w-1/4'>
          <ul>
            <li>
              <Link href='/learn/html'>HTML info</Link>
            </li>
            <li>
              <Link href='/learn/js'>Java Script Info</Link>
            </li>
            <li>
              <Link href='/learn/style-sheets'>Style Sheets info</Link>
            </li>
            <li>
              <Link href='/learn/react'>React</Link>
            </li>
            <li>
              <Link href='/learn/nextjs'>NextJS</Link>
            </li>
          </ul>
        </aside>
      </section>
    </header>
  );
}
