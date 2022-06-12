import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MyImage = ({ image }) => (
  <div>
    <LazyLoadImage
      alt="img"
      style={{ width: "100%" }}
      src={image}
      effect="blur"
    />
  </div>
);

export default MyImage;
