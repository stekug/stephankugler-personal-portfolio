import IframeVideo from "./IframeVideo";
import { Suspense } from "react";

export default function Projects3D() {
  return (
    <div>
      <p>3d Projects</p>
      <div className="">
        <Suspense fallback={<p>Loading Video</p>}>
          <IframeVideo />
        </Suspense>
      </div>
    </div>
  );
}
