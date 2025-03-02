import { robotoMono } from '@/app/layout';
import Image from 'next/image';
import type { Project } from '@/app/_types/Projext';
import TextExpander from './TextExpander';
interface Props {
  project: Project;
}

export default function Project({ project }: Props) {
  const { title, description, image } = project;

  return (
    <div className="bg-primary-5">
      <div className="flex flex-col w-full h-full border border-accentPink-1 p-2">
        <span className="bg-primary-2 text-accentPink-1 w-full lowercase">
          {title}
        </span>
        <div className="flex flex-col">
          <p className={`${robotoMono.className} pt-4`}>
            <TextExpander>{description}</TextExpander>
          </p>
          <Image
            src={image}
            width={200}
            height={150}
            alt={`${title}`}
            quality={66}
            className="mt-4 mx-auto shadow-sm shadow-primary-2 rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
