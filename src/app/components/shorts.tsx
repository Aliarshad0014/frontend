import React, { useRef, useState, useEffect } from "react";
import "../globals.css"; // Import CSS file for styling (see below)

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
  const [playingIndex, setPlayingIndex] = useState<number | null>(null); // Track which video is playing
  const videoRefs = useRef<(HTMLVideoElement | null)[]>(Array(videos.length).fill(null));

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length); // Initialize videoRefs array
  }, []);

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const containerHeight = container.clientHeight;
      const scrollPosition = container.scrollTop;
      const newIndex = Math.floor(scrollPosition / containerHeight);

      if (newIndex >= 0 && newIndex < videos.length && newIndex !== playingIndex) {
        setPlayingIndex(newIndex);
        container.scrollTop = newIndex * containerHeight; // Snap to the beginning of the next video
      }
    }
  };

  const handleClick = (index: number) => {
    if (playingIndex === index) {
      // If the clicked video is the current one playing, pause it
      const video = videoRefs.current[index];
      if (video && !video.paused) {
        video.pause();
      }
      setPlayingIndex(null); // Set playingIndex to null to indicate no video is playing
    } else {
      // Otherwise, set the clicked video as the current one playing
      setPlayingIndex(index);
    }
  };

  useEffect(() => {
    const handleVideoChange = () => {
      videoRefs.current.forEach((video, index) => {
        if (video) {
          if (index === playingIndex) {
            video.play();
          } else {
            video.pause();
            video.currentTime = 0;
          }
        }
      });
    };

    handleVideoChange();
  }, [playingIndex]);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen mb-40 bg-no-repeat bg-white">
      <h1 className="text-4xl font-bold mt-16 mb-8 text-yellow-500">Short Videos</h1>
      <div className="video-shorts-wrapper w-full h-full flex justify-center">
        <div
          className="video-shorts-container overflow-y-scroll h-screen max-h-screen-md bg-yellow-500"
          ref={containerRef}
          onScroll={handleScroll}
        >
          {videos.map((video, index) => (
            <div key={index} className="video-box flex-shrink-0 h-full w-auto">
              <video
                ref={(el) => {
                  if (el) {
                    videoRefs.current[index] = el;
                  }
                }}
                src={video}
                onClick={() => handleClick(index)}
                className={`mx-auto video-element ${index === playingIndex ? "playing" : ""}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoShorts;
