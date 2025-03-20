import { ProjectVideo } from "../_types/Projext";

interface Props {
  video: ProjectVideo;
}

export default function IframeVideo({ video }: Props) {
  return (
    <div className="relative mt-4 h-0 overflow-hidden pb-[56.25%]">
      <iframe
        className="absolute left-0 top-0 h-full w-full"
        title="YouTube video player"
        src={video ?? ""}
        allowFullScreen
      />
    </div>
  );
}
