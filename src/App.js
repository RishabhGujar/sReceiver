import React from "react";
import VideoJS from "./VideoJS";

export default function App() {
  const playerRef = React.useRef(null);
  const videoJsOptions = {
    // lookup the options in the docs for more options
    autoplay: false,
    controls: false,
    responsive: true,
    fluid: true,
    poster:
      "https://upload.wikimedia.org/wikipedia/commons/8/8f/Sintel_poster.jpg",

    sources: [
      {
        src: "https://multiplatform-f.akamaihd.net/i/multi/april11/sintel/sintel-hd_,512x288_450_b,640x360_700_b,768x432_1000_b,1024x576_1400_m,.mp4.csmil/master.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  };
  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // you can handle player events here
    player.on("waiting", () => {
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });
  };

  return (
    <div>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  );
}
