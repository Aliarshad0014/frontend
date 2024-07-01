import React, { useRef, useState, useEffect } from "react";
import "../globals.css"; // Import CSS file for styling
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

type HotSaleProps = {
  data: {video: string }[];
};


const VideoShorts = ({ data }: HotSaleProps) => {
  console.log("newdata", data)
  const [playingIndex, setPlayingIndex] = useState<number>(0); // Default to the first video
  const videoRefs = useRef<(HTMLVideoElement | null)[]>(Array(data.length).fill(null));

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, data.length); // Initialize videoRefs array
  }, [data]);

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

  const handlePrev = () => {
    setPlayingIndex((prev) => (prev > 0 ? prev - 1 : data.length - 1));
  };

  const handleNext = () => {
    setPlayingIndex((prev) => (prev < data.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen mb-40">
      <h1 className="text-4xl font-bold mt-16 text-yellow-500">Short Videos</h1>
      <div className="video-shorts-wrapper flex justify-center items-center w-full">
        <button className="prev-button rounded-full" onClick={handlePrev}><GrPrevious size={30} color="#eaab0c"/></button>
        <div className="video-shorts-container flex justify-center items-center space-x-4">
          {data.map((item, index) => (
            <div
              key={index}
              className={`video-box ${index === playingIndex ? "focused" : ""}`}
              style={{ display: index >= playingIndex - 1 && index <= playingIndex + 1 ? 'block' : 'none' }}
            >
              <video
                ref={(el) => {
                  if (el) {
                    videoRefs.current[index] = el;
                  }
                }}
                src={item.video}
                className={`video-element ${index === playingIndex ? "playing" : ""}`}
                style={{ transform: index === playingIndex ? 'scale(1.1)' : 'scale(0.9)' }}
              />
            </div>
          ))}
        </div>
        <button className="next-button rounded-full" onClick={handleNext}><GrNext size={30} color="#eaab0c"/></button>
      </div>
    </div>
  );
};

export default VideoShorts;
