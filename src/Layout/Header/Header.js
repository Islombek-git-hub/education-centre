import { useState } from "react";
import styles from "./Header.module.css";
// import { FaRegArrowAltCircleRight } from "react-icons/fa";
import MyButton from "../../components/MyButton/MyButton";
import { Link } from "react-router-dom";

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
        <div className={styles.header_right}>
          <div className={styles.time}>
            <ul>
              <li>{cDay}</li>
              <li>{ctime}</li>
            </ul>
          </div>
          <MyButton
            variant="contained"
            style={{
              borderRadius: "8px",
              backgroundColor: "#A89060",
            }}
          >
            KIRISH
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
