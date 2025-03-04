"use client";

import { useState } from "react";
import Projects3D from "./Projects3D";

export default function Work3D() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="mb-8 w-full max-w-2xl">
      <span className="mb-4 block text-xl font-black uppercase tracking-wide text-accentPink-1">
        My &quot;old&quot; 3D Work
      </span>
      <p>
        Like I mentioned, before working as a developer, I created 3D
        animations. If you are interested to see a selection of my
        &quot;old&quot; work, you are more than welcome!
      </p>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mt-4 rounded-md bg-accentGreen-1 px-1 font-bold text-primary-2 hover:bg-accentPink-1"
      >
        {isOpen ? "Hide 3D projects" : "Show 3D projects"}
      </button>
      {isOpen && <Projects3D />}
    </section>
  );
}
