import { useState } from "react";
import styles from "./Header.module.css";
// import { FaRegArrowAltCircleRight } from "react-icons/fa";
import MyButton from "../../components/MyButton/MyButton";
import { NavLink, Link } from "react-router-dom";
import { FaUniversity } from "react-icons/fa";

const Header = () => {
  let time = new Date().toLocaleTimeString();
  let day = new Date().toLocaleDateString();

  const [ctime, setCtime] = useState("");
  const [cDay, setCDay] = useState("");

  const dateFun = () => {
    time = new Date().toLocaleTimeString();
    day = new Date().toLocaleDateString();
    setCtime(time);
    setCDay(day);
  };

  setInterval(() => {
    dateFun();
  }, 1000);

  return (
    <div className={styles.header}>
      <div className={`container ${styles.header_container}`}>
        <h3 className={styles.logo}>
          <Link to="">LOGO</Link>
        </h3>
        <div className={`header_active ${styles.header_right}`}>
          <NavLink to="/about">
            <h3 className={styles.about_link}>
              <span>Biz haqimizda</span> <FaUniversity />
            </h3>
          </NavLink>
          <div className={styles.time}>
            <ul>
              <li>{cDay}</li>
              <li>{ctime}</li>
            </ul>
          </div>
          <MyButton
            variant="contained"
            href="/sign-in"
            style={{
              borderRadius: "8px",
              backgroundColor: "#A89060",
              color: "#fff",
            }}
          >
            KIRISH
          </MyButton>
          <MyButton
            variant="contained"
            href="/sign-up"
            style={{
              borderRadius: "8px",
              backgroundColor: "#4A607A",
              color: "#fff",
              marginLeft: "0.5rem",
            }}
          >
            REGISTRATSIYA
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
