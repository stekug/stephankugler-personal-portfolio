export default function IframeVideo() {
  return (
    <div className="relative h-0 overflow-hidden pb-[56.25%]">
      <iframe
        className="absolute left-0 top-0 h-full w-full"
        title="YouTube video player"
        src="https://www.youtube.com/embed/E47ewV05pS0?si=oB9u6xhLevkj5ODr"
        allowFullScreen
      />
    </div>
  );
}
