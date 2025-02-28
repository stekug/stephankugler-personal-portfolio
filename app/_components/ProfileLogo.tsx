import Image from 'next/image';
import Link from 'next/link';
import profilePic from '@/public/sk-profile-1.jpeg';
import Github from './Github';
import Linkedin from './Linkedin';

export default function ProfileLogo() {
  return (
    <section className="mt-10">
      <Link
        href="/"
        className="flex flex-col items-center z-10 rounded-full py-5"
      >
        <Image
          className="rounded-full shadow-[0px_0px_60px_rgba(50,60,90,0.5)]"
          src={profilePic}
          alt="Profile picture of Stephan Kugler"
          height="350"
          width="350"
          quality={80}
        />
      </Link>

      <div>
        <p className="max-w-md mx-auto text-4xl text-center font-normal py-5">
          Hello, my name is{' '}
          <span className="font-black text-accentGreen-1 uppercase">
            Stephan Kugler.
          </span>{' '}
          I <span className="font-black text-accentPink-1">create</span>,{' '}
          <span className="font-black text-accentPink-1">code</span> and{' '}
          <span className="font-black text-accentPink-1">enjoy</span> every{' '}
          <span className="font-black text-accentPink-1">bit</span> of it!
        </p>
      </div>

      <div className="flex justify-center py-5 gap-10">
        <Link href="https://github.com/stekug" target="_blank">
          <Github className="fill-accentGreen-1 hover:fill-accentPink-1 hover:scale-110 transition-all duration-500 w-12 h-12" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/stephan-kugler-149163115/"
          target="_blank"
        >
          <Linkedin className="fill-accentGreen-1 hover:fill-accentPink-1 hover:scale-110 transition-all duration-500 w-12 h-12" />
        </Link>
      </div>
    </section>
  );
}
