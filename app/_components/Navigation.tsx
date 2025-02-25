import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="flex overflow-visible w-full py-5 fixed top-0 bg-primary-8 backdrop-blur-sm">
      <ul className="flex justify-center w-full gap-12 font-extrabold text-l">
        <li>
          <Link
            href="/"
            className="hover:text-accentGreen-1 hover:border-t-2 border-accentGreen-1 transition-colors"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="hover:text-accentGreen-1 hover:border-t-2 border-accentGreen-1 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="hover:text-accentGreen-1 hover:border-t-2 border-accentGreen-1 transition-colors"
          >
            My Work
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="hover:text-accentGreen-1 hover:border-t-2 border-accentGreen-1 transition-colors"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
