"use client";

import { useState } from "react";

interface Props {
  children: string;
  wordCount: number;
}

export default function TextExpander({ children, wordCount }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, wordCount).join(" ") + "...";

  return (
    <span>
      {displayText}
      <button
        className="border-b border-accentGreen-1 text-sm leading-3 text-accentGreen-1 hover:border-accentPink-1 hover:text-accentPink-1"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "show less" : "show more"}
      </button>
    </span>
  );
}
