import Link from "next/link";

const LeftBar = () => {
  return (
    <aside className='flex my-2 w-30 p-2 '>
      <ul className='text-xl text-slate-600 '>
        <li className='hover:underline'>
          <Link href='/learn/overview'>Overview</Link>
        </li>
        <li className='hover:underline'>
          <Link href='/learn/context'>Context</Link>
        </li>
        <li className='hover:underline'>
          <Link href='/learn/perspectives'>Perspectives</Link>
        </li>
        <li className='hover:underline'>
          <Link href='/learn/timeline'>Timeline</Link>
        </li>
        <li className='hover:underline'>
          <Link href='/learn/glossary'>Glossary</Link>
        </li>
      </ul>
    </aside>
  );
};

export default LeftBar;
