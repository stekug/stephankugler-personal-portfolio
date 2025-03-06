import Image from "next/image";
import Link from "next/link";
import profilePic from "@/public/sk-profile-1.jpeg";
import Github from "./Github";
import Linkedin from "./Linkedin";

export default function ProfileLogo() {
  return (
    <section className="mt-10">
      <Link
        href="/"
        className="z-10 flex flex-col items-center rounded-full py-5"
      >
        <Image
          className="rounded-full shadow-[0px_0px_60px_rgba(50,60,90,0.5)]"
          src={profilePic}
          alt="Profile picture of Stephan Kugler"
          height="350"
          width="350"
          quality={100}
        />
      </Link>

      <div>
        <p className="mx-auto max-w-md py-5 text-center text-4xl font-normal">
          Hello, my name is{" "}
          <span className="font-black uppercase text-accentGreen-1">
            Stephan Kugler.
          </span>{" "}
          I <span className="font-black text-accentPink-1">create</span>,{" "}
          <span className="font-black text-accentPink-1">code</span> and{" "}
          <span className="font-black text-accentPink-1">enjoy</span> every{" "}
          <span className="font-black text-accentPink-1">bit</span> of it!
        </p>
      </div>

      <div className="flex justify-center gap-10 py-5">
        <Link href="https://github.com/stekug" target="_blank">
          <Github className="h-12 w-12 fill-accentGreen-1 transition-all duration-500 hover:scale-110 hover:fill-accentPink-1" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/stephan-kugler-149163115/"
          target="_blank"
        >
          <Linkedin className="h-12 w-12 fill-accentGreen-1 transition-all duration-500 hover:scale-110 hover:fill-accentPink-1" />
        </Link>
      </div>
    </section>
  );
}
