import { robotoMono } from "@/app/layout";
import Image from "next/image";
import type { Project } from "@/app/_types/Projext";
import TextExpander from "./TextExpander";
import Github from "./Github";
import Link from "next/link";
interface Props {
  project: Project;
}

export default function Project({ project }: Props) {
  const { title, description, image, tech, github } = project;

  const techArray = tech.split(",");

  return (
    <div className="bg-primary-5">
      <div className="flex h-full w-full flex-col border border-accentPink-1 p-2">
        <span className="w-full rounded-sm bg-primary-2 px-1 font-bold lowercase text-accentPink-1">
          {title}
        </span>
        <div className="flex flex-col">
          <p className={`${robotoMono.className} pt-2`}>
            <TextExpander>{description}</TextExpander>
          </p>
          <Image
            src={image}
            width={150}
            height={100}
            alt={`${title}`}
            quality={66}
            className="mx-auto mt-4 rounded-3xl shadow-sm shadow-primary-2"
          />
        </div>
        <span className="mt-4 block rounded-sm bg-primary-2 px-1 font-bold text-accentPink-1">
          tech stack
        </span>
        <p className={`${robotoMono.className} flex flex-wrap gap-1 py-1`}>
          {techArray.map((tech, index) => (
            <span className="rounded-sm bg-primary-2 px-1 text-xs" key={index}>
              {tech}
            </span>
          ))}
        </p>
        <div className="pt-2">
          <Link href={`${github}`} target="_blank">
            <Github className="h-8 w-8 fill-accentGreen-1 transition-all duration-500 hover:scale-110 hover:fill-accentPink-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
