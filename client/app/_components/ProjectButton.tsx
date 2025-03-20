interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function ProjectButton({
  onClick,
  children,
  className = "",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`mt-4 rounded-md bg-accentGreen-1 p-2 font-bold text-primary-2 transition-all duration-300 hover:bg-accentPink-1 ${className}`}
    >
      {children}
    </button>
  );
}
