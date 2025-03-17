import IframeVideo from "./IframeVideo";
import { Suspense } from "react";
import VideoSkeleton from "./VideoSkeleton";
import { Project } from "../_types/Projext";
import TextExpander from "./TextExpander";

interface Props {
  project: Project;
}

export default function Project3D({ project }: Props) {
  const { title, subtitle, description, video } = project;

  return (
    <div className="">
      <hr className="my-6 h-px border-0 dark:bg-accentPink-1" />
      <span className="mt-1 bg-primary-2 text-base font-bold text-accentPink-1">
        {title}
      </span>
      {subtitle && <p className="mt-1 text-base font-bold">{subtitle}</p>}
      <p>
        <TextExpander wordCount={30}>{description}</TextExpander>
      </p>
      {video && (
        <Suspense fallback={<VideoSkeleton />}>
          <IframeVideo video={video} />
        </Suspense>
      )}
    </div>
  );
}
