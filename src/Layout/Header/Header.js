import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import MyButton from "../../components/MyButton/MyButton";
import { Link, NavLink } from "react-router-dom";
import { FaUniversity } from "react-icons/fa";
import { useSelector } from "react-redux";
const Header = () => {
  const user = useSelector((state) => state.user);

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

  useEffect(() => {
    setInterval(() => {
      dateFun();
    }, 1000);

    return (function cleanup() {
      clearInterval();
    })();
  }, []);

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
          {user.data.course ? (
            <ul>
              <li>
                <b>{user.data.name}</b>
              </li>
              <li>
                <b>{user.data.surname}</b>
              </li>
            </ul>
          ) : (
            <>
              <Link to="sign-in">
                <MyButton
                  variant="contained"
                  style={{
                    borderRadius: "8px",
                    backgroundColor: "#A89060",
                    color: "#fff",
                  }}
                >
                  KIRISH
                </MyButton>
              </Link>
              <Link to="sign-up">
                <MyButton
                  variant="contained"
                  style={{
                    borderRadius: "8px",
                    backgroundColor: "#4A607A",
                    color: "#fff",
                    marginLeft: "0.5rem",
                  }}
                >
                  REGISTRATSIYA
                </MyButton>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
