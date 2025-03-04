import IframeVideo from "./IframeVideo";
import { Suspense } from "react";
import VideoSkeleton from "./VideoSkeleton";
import { Project } from "../_types/Projext";

interface Props {
  project: Project;
}

export default function Project3D({ project }: Props) {
  const { title } = project;

  return (
    <div className="">
      <span className="font-bold">{title}</span>
      <Suspense fallback={<VideoSkeleton />}>
        <IframeVideo />
      </Suspense>
    </div>
  );
}
