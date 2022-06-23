import React from "react";

const Player = ({ video_src }) => {
  return (
    <iframe
      width="100%"
      height="450px"
      src={video_src}
      title="YouTube video player"
    ></iframe>
  );
};
export default Player;
