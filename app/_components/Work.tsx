import projects from '@/data/projects.json';
import Project from './Project';

export default function Work() {
  return (
    <section className="w-full max-w-2xl mb-8">
      <span className="text-xl font-black block text-accentPink-1 uppercase tracking-wide mb-4">
        My Work
      </span>
      {projects.map((project) => (
        <Project project={project} key={project.id} />
      ))}
    </section>
  );
}
