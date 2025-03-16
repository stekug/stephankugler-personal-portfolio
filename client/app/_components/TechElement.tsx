interface Props {
  name: string;
}

export default function TechElement({ name }: Props) {
  return (
    <div className="h-full overflow-hidden rounded-md border-2 border-accentGreen-1 bg-primary-4 p-1">
      <span className="block px-2 text-sm font-black tracking-wider text-accentGreen-1 sm:inline sm:text-base">
        {name}
      </span>
    </div>
  );
}
