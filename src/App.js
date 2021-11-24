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
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",

    sources: [
      {
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        type: "video/mp4",
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
