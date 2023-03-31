import Link from "next/link";

export default function Footer() {
  return (
    <footer >
      <hr />
      <ul className="flex gap-10 justify-center  ">
        <li >
          <a href='https://next-auth.js.org'>Documentation</a>
        </li>
        <li >
          <a href='https://www.npmjs.com/package/next-auth'>NPM</a>
        </li>
        <li >
          <a href='https://github.com/nextauthjs/next-auth-example'>GitHub</a>
        </li>
      </ul>
    </footer>
  );
}
