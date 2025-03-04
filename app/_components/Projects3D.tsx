import IframeVideo from "./IframeVideo";
import { Suspense } from "react";
import VideoSkeleton from "./VideoSkeleton";

export default function Projects3D() {
  return (
    <div>
      <p>3d Projects</p>
      <div className="">
        <Suspense fallback={<VideoSkeleton />}>
          <IframeVideo />
        </Suspense>
      </div>
    </div>
  );
}
