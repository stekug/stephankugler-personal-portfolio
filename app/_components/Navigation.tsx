import Link from "next/link";
import { twMerge } from "tailwind-merge";

const linkStyles =
  "hover:text-accentGreen-1 hover:border-t-2 border-accentGreen-1 transition-colors";

export default function Navigation() {
  return (
    <nav className="fixed top-0 z-50 flex w-full overflow-visible bg-primary-8 py-5 backdrop-blur-sm">
      <ul className="text-l flex w-full justify-center gap-6 font-extrabold">
        <li>
          <Link scroll={true} href="#home" className={twMerge(linkStyles)}>
            Home
          </Link>
        </li>
        <li>
          <Link scroll={true} href="#about" className={twMerge(linkStyles)}>
            About
          </Link>
        </li>
        <li>
          <Link scroll={true} href="#work" className={twMerge(linkStyles)}>
            Work
          </Link>
        </li>
        <li>
          <Link scroll={true} href="#throwback" className={twMerge(linkStyles)}>
            Throwback
          </Link>
        </li>
        <li>
          <Link scroll={true} href="#contact" className={twMerge(linkStyles)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
