import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="flex overflow-visible w-full py-5 fixed top-0 bg-primary-8 backdrop-blur-sm">
      <ul className="flex justify-center w-full gap-12 font-extrabold text-2xl">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">My Work</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
