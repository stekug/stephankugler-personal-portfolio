interface Props {
  name: string;
  progress: number;
}

export default function ProgressBar({ name, progress }: Props) {
  return (
    <div className="mt-1 w-full">
      <span className="text-sm font-black block text-accentGreen-1 tracking-wide">
        {name}
      </span>
      <div className="h-4 bg-primary-4 rounded-md overflow-hidden border border-accentGreen-1 p-1">
        <div
          className="h-full bg-accentGreen-1 transition-all rounded-md"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
