"use client";

import { useState } from "react";

import Projects3D from "./Projects3D";
import ProjectButton from "./ProjectButton";

export default function Work3D() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className="mb-8 w-full max-w-2xl scroll-mt-20 text-lg"
      id="throwback"
    >
      <span className="mb-4 block text-xl font-black uppercase tracking-wide text-accentPink-1">
        Throwback: My 3D Creations
      </span>
      <p>
        I mentioned that my background includes design and 3D animation. If
        you&apos;re interested in exploring my earlier work, just click the
        button on the website to see the projects.
      </p>
      <ProjectButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide 3D projects" : "Show 3D projects"}
      </ProjectButton>

      {isOpen && (
        <>
          <Projects3D />
          <ProjectButton onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Hide 3D projects" : "Show 3D projects"}
          </ProjectButton>
        </>
      )}
    </section>
  );
}
