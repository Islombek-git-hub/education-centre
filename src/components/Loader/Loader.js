import React from "react";
import { BallTriangle } from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader_modal}>
      <BallTriangle color="#DDD0A4" height={100} width={100} />
    </div>
  );
};

export default Loader;
