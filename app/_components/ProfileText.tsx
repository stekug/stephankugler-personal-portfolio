import Link from 'next/link';
import Github from '@/app/_components/Github';
import Linkedin from './Linkedin';

export default function ProfileText() {
  return (
    <div>
      <p className="max-w-md mx-auto text-4xl text-center font-normal px-3">
        Hello, my name is{' '}
        <span className="font-black text-accentGreen-1 uppercase">
          Stephan Kugler.
        </span>{' '}
        I <span className="font-black text-accentPink-1">create</span>,{' '}
        <span className="font-black text-accentPink-1">code</span> and{' '}
        <span className="font-black text-accentPink-1">enjoy</span> every{' '}
        <span className="font-black text-accentPink-1">bit</span> of it!
      </p>
      <div className="flex justify-center py-10 gap-10">
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
      <article className="text-lg max-w-2xl">
        <span className="text-xl font-black block text-accentPink-1 uppercase tracking-wide mb-4">
          Behind the code
        </span>
        <p className="mb-4">
          Hi, I’m Stephan, a software developer with a background in 3D motion
          design. My journey started in the creative industry, working on visual
          storytelling and interactive media. But my fascination with
          problem-solving and technology led me into software development, where
          Node.js.
        </p>
        <p className="mb-4">
          In 2025, I joined adesso as a software developer, where I get to work
          on exciting projects that blend creativity with technical expertise. I
          enjoy crafting clean, user-friendly applications and constantly
          expanding my skill set.
        </p>
        <p>
          When I’m not coding, you’ll probably find me riding my gravel bike,
          playing guitar, or diving into the latest tech trends. 🚀
        </p>
      </article>
    </div>
  );
}
