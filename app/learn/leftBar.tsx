import Link from "next/link";

const LeftBar = () => {
  return (
    <aside className='flex my-2 w-30 p-2 '>
      <ul className='flex flex-col '>
        <li>
          <Link href='/learn/overview' >Project Overview</Link>
        </li>
        <li>
          <Link href='/learn/perspectives'>Personal Perspectives</Link>
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
