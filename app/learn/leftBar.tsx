import Link from "next/link";

const LeftBar = () => {
  return (
    <aside className='flex my-5  w-40'>
      <ul>
        <li>
          <Link href='/learn/html'>HTML</Link>
        </li>
        <li>
          <Link href='/learn/js'>Java Script</Link>
        </li>
        <li>
          <Link href='/learn/style-sheets'>Style Sheets</Link>
        </li>
        <li>
          <Link href='/learn/react'>React</Link>
        </li>
        <li>
          <Link href='/learn/nextjs'>NextJS</Link>
        </li>
      </ul>
    </aside>
  );
};

export default LeftBar;
