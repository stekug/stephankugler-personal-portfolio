import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="py-5">
      <ul className="flex flex-row gap-10 font-extrabold text-2xl">
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
