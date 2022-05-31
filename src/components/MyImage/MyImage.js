import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MyImage = ({ image }) => (
  <div>
    <LazyLoadImage alt="img" src={image} effect="blur" />
  </div>
);

export default MyImage;
