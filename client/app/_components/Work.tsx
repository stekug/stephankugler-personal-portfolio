import ProjektCarousel from "./ProjektCarousel";

export default function Work() {
  return (
    <>
      <section className="mb-8 w-full max-w-2xl scroll-mt-20" id="work">
        <span className="mb-4 block text-xl font-black uppercase tracking-wide text-accentPink-1">
          My Work
        </span>
        <ProjektCarousel />
      </section>
    </>
  );
}
