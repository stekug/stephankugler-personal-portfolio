import TechElement from "./TechElement";

export default function ProfileText() {
  return (
    <>
      <article className="mb-8 max-w-2xl scroll-mt-20 text-lg" id="about">
        <span className="mb-4 block text-xl font-black uppercase tracking-wide text-accentPink-1">
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
      <section className="w-full max-w-2xl text-lg">
        <span className="mb-4 block text-xl font-black uppercase tracking-wide text-accentPink-1">
          My current tech stack
        </span>
        <div>
          <p>
            These are technologies I use in my day to day work and I´m learning
            at the moment.{" "}
          </p>
          <div className="mt-2 flex flex-row flex-wrap gap-1 sm:gap-2">
            <TechElement name="HTML5" />
            <TechElement name="CSS" />
            <TechElement name="React.js" />
            <TechElement name="Next.js" />
            <TechElement name="Javascript" />
            <TechElement name="Node.js" />
            <TechElement name="Auth.js" />
            <TechElement name="Tailwind" />
            <TechElement name="Styled Components" />
            <TechElement name="Typescript" />
            <TechElement name="Cloudinary" />
            <TechElement name="Supabase" />
            <TechElement name="MongoDB" />
            <TechElement name="Angular" />
          </div>
        </div>
      </section>
    </>
  );
}
