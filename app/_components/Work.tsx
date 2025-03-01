import projects from '@/data/projects.json';
import { robotoMono } from '@/app/layout';
import Image from 'next/image';

export default function Work() {
  const { title, description, tech, image, type } = projects[0];
  return (
    <section className="w-full max-w-2xl mb-8">
      <span className="text-xl font-black block text-accentPink-1 uppercase tracking-wide mb-4">
        My Work
      </span>
      <div className="bg-primary-5">
        <div className="flex flex-col w-full h-full border border-accentPink-1 p-2">
          <span className="bg-primary-2 text-accentPink-1 w-full">{title}</span>
          <div className="flex flex-col">
            <p className={`${robotoMono.className} text-m pt-4`}>
              {description}
            </p>
            <Image
              src={image}
              width={200}
              height={0}
              alt={`${title}`}
              className="mt-4 mx-auto shadow-sm shadow-primary-2 rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
