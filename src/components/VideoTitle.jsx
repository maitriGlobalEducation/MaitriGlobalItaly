"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export default function VideoTitle({ src, alt }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setPlaying(false);
    setReady(false);

    const video = videoRef.current;
    if (!video) return;

    const seekToMiddle = () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0) {
        return;
      }

      // Display a frame from the middle as the thumbnail.
      video.currentTime = video.duration / 2;
    };

    const handleSeeked = () => {
      setReady(true);
    };

    video.addEventListener("loadedmetadata", seekToMiddle);
    video.addEventListener("seeked", handleSeeked);

    if (video.readyState >= 1) {
      seekToMiddle();
    }

    return () => {
      video.removeEventListener("loadedmetadata", seekToMiddle);
      video.removeEventListener("seeked", handleSeeked);
    };
  }, [src]);

  async function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
      } catch (error) {
        console.error("Video playback failed:", error);
      }
    } else {
      video.pause();
    }
  }

  return (
    <div className="group relative w-full overflow-hidden rounded-xl bg-black">
      <video
        ref={videoRef}
        src={src}
        preload="auto"
        playsInline
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        className="block h-auto w-full"
      />

      <button
        type="button"
        onClick={togglePlayback}
        aria-label={`${playing ? "Pause" : "Play"} ${alt || "video"}`}
        className={`absolute inset-0 flex cursor-pointer items-center justify-center transition-colors ${
          playing ? "bg-transparent" : "bg-black/10 hover:bg-black/20"
        }`}
      >
        {(!playing || ready) && (
          <span
            className={`flex h-12 w-12 items-center justify-center rounded-full bg-black/45 text-white shadow-lg backdrop-blur-sm transition-transform ${
              playing
                ? "scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                : "group-hover:scale-110"
            }`}
          >
            {playing ? (
              <Pause size={22} fill="white" />
            ) : (
              <Play size={22} fill="white" />
            )}
          </span>
        )}
      </button>
    </div>
  );
}
