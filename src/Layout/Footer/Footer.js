import React from "react";
import styles from "./Footer.module.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import YandexMap from "../../components/YandexMap/YandexMap";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={`container ${styles.footer_container}`}>
        <div className={styles.f_left}>
          <h1>LOGO</h1>
          <h6>+998 (99) 123 45 67</h6>
          <p>education@gmail.com</p>
          <ul>
            <li>
              <BsFacebook />
            </li>
            <li>
              <BsInstagram />
            </li>
            <li>
              <BsTelegram />
            </li>
            <li>
              <BsYoutube />
            </li>
          </ul>
        </div>
        <div className={styles.f_right}>
          <YandexMap />
        </div>
      </div>
    </div>
  );
};

export default Footer;
