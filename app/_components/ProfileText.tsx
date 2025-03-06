import ProgressBar from "./ProgressBar";

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
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            <ProgressBar name="HTML5" progress={90} />
            <ProgressBar name="CSS" progress={87} />
            <ProgressBar name="Tailwind" progress={77} />
            <ProgressBar name="Styled Components" progress={82} />
            <ProgressBar name="Javascript" progress={86} />
            <ProgressBar name="Typescript" progress={81} />
            <ProgressBar name="React.js" progress={82} />
            <ProgressBar name="Next.js" progress={76} />
            <ProgressBar name="Supabase" progress={70} />
            <ProgressBar name="MongoDB" progress={65} />
            <ProgressBar name="Node.js" progress={70} />
            <ProgressBar name="Angular" progress={40} />
          </div>
        </div>
      </section>
    </>
  );
}
