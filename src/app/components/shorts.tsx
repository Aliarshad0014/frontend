import React, { useRef, useState, useEffect } from "react";

const videos = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://www.w3schools.com/html/movie.mp4",
];

const VideoShorts = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentVideo, setCurrentVideo] = useState(0);

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const scrollPosition = container.scrollTop;
      const containerHeight = container.clientHeight;
      const newCurrentVideo = Math.round(scrollPosition / containerHeight);
      if (newCurrentVideo !== currentVideo) {
        setCurrentVideo(newCurrentVideo);
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const containerHeight = container.clientHeight;
      container.scrollTop = currentVideo * containerHeight;
    }
  }, [currentVideo]);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-[100vh] mb-40 bg-no-repeat bg-white">
      <h1 className="text-4xl font-bold mt-16 text-yellow-500">Short Videos</h1>
      <div className="video-shorts-wrapper w-full h-full flex justify-center">
        <div
          className="video-shorts-container overflow-y-scroll h-full max-h-screen-md bg-white"
          ref={containerRef}
          onScroll={handleScroll}
        >
          {videos.map((video, index) => (
            <div key={index} className="video-box flex-shrink-0 h-full w-auto">
              <video
                src={video}
                controls
                className={`mx-auto ${index === currentVideo ? "active-video" : ""}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoShorts;
