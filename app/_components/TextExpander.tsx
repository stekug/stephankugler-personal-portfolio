'use client';

import { useState } from 'react';

interface Props {
  children: string;
}

export default function TextExpander({ children }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayText = isExpanded
    ? children
    : children.split(' ').slice(0, 20).join(' ') + '...';

  return (
    <span>
      {displayText}
      <button
        className="text-sm text-accentGreen-1 hover:text-accentPink-1 leading-3 border-b border-accentGreen-1 hover:border-accentPink-1"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'show less' : 'show more'}
      </button>
    </span>
  );
}
