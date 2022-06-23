import React from "react";

const Player = ({ video_src, title, ...props }) => {
  return (
    <iframe {...props} src={video_src} title={title} allowFullScreen></iframe>
  );
};
export default Player;
