import Link from "next/link";
import { twMerge } from "tailwind-merge";

const linkStyles =
  "hover:text-accentGreen-1 hover:border-t-2 border-accentGreen-1 transition-colors";

export default function Navigation() {
  return (
    <nav className="fixed top-0 flex w-full overflow-visible bg-primary-8 py-5 backdrop-blur-sm">
      <ul className="text-l flex w-full justify-center gap-12 font-extrabold">
        <li>
          <Link href="/" className={twMerge(linkStyles)}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/" className={twMerge(linkStyles)}>
            About
          </Link>
        </li>
        <li>
          <Link href="/" className={twMerge(linkStyles)}>
            My Work
          </Link>
        </li>
        <li>
          <Link href="/" className={twMerge(linkStyles)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
