import Link from 'next/link';
import Github from '@/app/_components/Github';
import Linkedin from './Linkedin';

export default function ProfileText() {
  return (
    <div>
      <p className="max-w-md text-4xl text-center font-normal px-3">
        Hello, my name is{' '}
        <span className="font-black text-accentGreen-1 uppercase">
          Stephan Kugler.
        </span>{' '}
        I <span className="font-black text-accentPink-1">create</span>,{' '}
        <span className="font-black text-accentPink-1">code</span> and{' '}
        <span className="font-black text-accentPink-1">enjoy</span> every{' '}
        <span className="font-black text-accentPink-1">bit</span> of it!
      </p>
      <div className="flex justify-center gap-10 py-10">
        <Link href="https://github.com/stekug" target="_blank">
          <Github className="fill-accentGreen-1 hover:fill-accentPink-1 hover:scale-110 transition-all w-12 h-12" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/stephan-kugler-149163115/"
          target="_blank"
        >
          <Linkedin className="fill-accentGreen-1 hover:fill-accentPink-1 hover:scale-110 transition-all w-12 h-12" />
        </Link>
      </div>
    </div>
  );
}
