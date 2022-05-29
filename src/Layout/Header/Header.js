import React from "react";
import styles from "./Header.module.css";
import { FaAngleDown } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={`container ${styles.header_container}`}>
        <h3 className={styles.logo}>LOGO</h3>
        <div className={styles.header_right}>
          <ul>
            <li>BIZ HAQIMIZDA</li>
            <li>
              YORDAM <FaAngleDown />
            </li>
            <li>
              KURSLAR <FaAngleDown />
            </li>
          </ul>
          <div className={styles.time}>
            <p>10.10.2022 | 12:12:00</p>
          </div>
          <div className={styles.sign_in}>
            KIRISH <FaRegArrowAltCircleRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
