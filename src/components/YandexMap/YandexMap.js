import React from "react";
// import styles from "./YandexMap.module.css";
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
} from "react-yandex-maps";
const YandexMap = () => {
  return (
    <YMaps>
      <div
        style={{
          borderRadius: "20px ",
          overflow: "hidden",
          boxShadow: "0 0 10px #aaa",
        }}
      >
        <Map
          defaultState={{
            center: [41.340865, 69.286815],
            zoom: 16,
          }}
        >
          <Placemark geometry={[41.340865, 69.286815]} />
          <FullscreenControl options={{ float: "right" }} />
          <ZoomControl />
        </Map>
      </div>
    </YMaps>
  );
};

export default YandexMap;
