import { useState, useEffect } from "react";
import { db } from "../../firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";

import styles from "./Home.module.css";

import Loader from "../../components/Loader/Loader";
import MyImage from "../../components/MyImage/MyImage";

import { FaAngleDoubleDown } from "react-icons/fa";

const Home = () => {
  const userCollectionRef = collection(db, "home");
  const [dataHome, setDataHome] = useState([]);
  // console.log(dataHome[0].about_edu);
  const getData = async () => {
    try {
      const data = await getDocs(userCollectionRef);
      setDataHome(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (err) {
      console.error(err);
    }
  };
  // console.log(dataHome);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.home}>
      {dataHome.length > 0 ? (
        <div className={`container ${styles.home_container}`}>
          <div className={styles.home_head}>
            <div className={styles.home_text}>
              <h1>{dataHome[0].title}</h1>
              <p>{dataHome[0].title_desc}</p>
              <input
                className={styles.hh_input}
                type="text"
                placeholder="SEARCH..."
              />
            </div>
            <div className={styles.home_img}>
              <MyImage image={dataHome[0].home_img} />
            </div>
          </div>
          <a href="#about_edu" className={styles.down}>
            <FaAngleDoubleDown />
          </a>
          {/* ###################### */}
          <div id="about_edu" className={styles.about_edu}>
            <h1>{dataHome[0].title_1}</h1>
            {dataHome[0].about_edu.map((a, i) => {
              return (
                <div key={i + 11324} className={styles.card_about_edu}>
                  <div className={styles.card_about_edu_img}>
                    <MyImage image={a.img_src} />
                  </div>
                  <h5>{a.title}</h5>
                </div>
              );
            })}
          </div>
          {/* ###################### */}
          <div className={styles.choice_edu}>
            <h1 className={styles.choice_edu_title}>{dataHome[0].title_2}</h1>
            <p className={styles.choice_edu_desc}>{dataHome[0].t2_desc}</p>
            <div className={styles.choice_edu_cards}>
              {dataHome[0].choice_edu.map((a, i) => {
                return (
                  <div key={a.img_src} className={styles.choice_edu_card}>
                    <h2>{a.title}</h2>
                    <MyImage image={a.img_src} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Home;
