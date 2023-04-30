import Link from "next/link";

const LeftBar = () => {
  return (
    <aside className='flex my-2 w-30 p-2 '>
      <ul className='flex flex-col '>
        <li>
          <Link href='/learn/overview' >Overview</Link>
        </li>
        <li>
          <Link href='/learn/context'>Context</Link>
        </li>
        <li>
          <Link href='/learn/perspectives'>Perspectives</Link>
        </li>
        <li>
          <Link href='/learn/timeline'>Timeline</Link>
        </li>
        <li>
          <Link href='/learn/glossary'>Glossary</Link>
        </li>
      </ul>
    </aside>
  );
};

export default LeftBar;
