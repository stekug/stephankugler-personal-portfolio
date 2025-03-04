import Projects3D from "./Projects3D";
import ProjektCarousel from "./ProjektCarousel";

export default function Work() {
  return (
    <>
      <section className="mb-8 w-full max-w-2xl">
        <span className="mb-4 block text-xl font-black uppercase tracking-wide text-accentPink-1">
          My Work
        </span>
        <ProjektCarousel />
      </section>
      <section className="mb-8 w-full max-w-2xl">
        <span className="mb-4 block text-xl font-black uppercase tracking-wide text-accentPink-1">
          My &quot;old&quot; 3D Work
        </span>
        <p>
          Like I mentioned, before working as a developer, I created 3D
          animations. If you are interested to see a selection of my
          &quot;old&quot; work, you are more than welcome!
        </p>
        <button className="mt-2 rounded-md bg-accentGreen-1 px-1 font-bold text-primary-2 hover:bg-accentPink-1">
          Show 3D projects
        </button>
        <Projects3D />
      </section>
    </>
  );
}
