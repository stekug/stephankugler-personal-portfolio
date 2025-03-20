export default function VideoSkeleton() {
  return (
    <div className="relative m-0 flex animate-pulse items-center justify-center bg-accentPink-1 pb-[56.25%]">
      <p className="absolute pt-[56.25%]">Loading video...</p>
    </div>
  );
}
