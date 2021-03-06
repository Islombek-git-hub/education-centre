import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { db } from "../../firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import styles from "./Home.module.css";
import Loader from "../../components/Loader/Loader";
import MyImage from "../../components/MyImage/MyImage";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Modal from "../../components/Modal/Modal";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { modalFun } from "../../redux/Actions/actions";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";

// #############################
const Home = () => {
  const dispatch = useDispatch();
  const userCollectionRef = collection(db, "home");
  const userCollectionRef_news = collection(db, "news");
  const [dataHome, setDataHome] = useState([]);
  const [dataNews, setDataNews] = useState([]);
  const [newsMenu, setNewsMenu] = useState(false);

  const getData = async () => {
    try {
      const data = await getDocs(userCollectionRef);
      const data_news = await getDocs(userCollectionRef_news);
      setDataHome(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setDataNews(data_news.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (err) {
      console.error(err);
    }
  };
  console.log(dataNews);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.home}>
      {dataHome.length > 0 ? (
        <div className={`container ${styles.home_container}`}>
          <div className={newsMenu ? styles.news_menu_on : styles.news_menu}>
            <div className={styles.news_menu_box}>
              <button
                className={styles.news_menu_btn}
                onClick={() => {
                  setNewsMenu(!newsMenu);
                }}
              >
                <BiMessageSquareDetail />
              </button>
              {dataNews.length > 0 ? (
                dataNews.map((a) => {
                  return (
                    <div className={styles.news_menu_card}>
                      <h3>{a.title}</h3>
                      <p>{a.desc}</p>
                    </div>
                  );
                })
              ) : (
                <h4>LOADING...</h4>
              )}
            </div>
          </div>

          <Modal>
            <video width="100%" controls>
              <source
                src="https://firebasestorage.googleapis.com/v0/b/education-b2f41.appspot.com/o/about_video.mp4?alt=media&token=4388ad84-d614-41d9-a92e-4401ab8ca772"
                type="video/mp4"
              />
            </video>
          </Modal>
          <div className={styles.home_head}>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-start"
            >
              <Grid item sm={12} md={8}>
                <h1 className={styles.home_head_h1}>{dataHome[0].title}</h1>
                <p className={styles.home_head_p}>{dataHome[0].title_desc}</p>
                <IconButton onClick={() => dispatch(modalFun())}>
                  <PlayCircleIcon
                    style={{ color: "#A89060", fontSize: "3rem" }}
                  />
                </IconButton>
              </Grid>
              <Grid item xs={12} sm={8} md={4}>
                <MyImage image={dataHome[0].home_img} />
              </Grid>
            </Grid>
          </div>

          {/* ###################### */}
          <div id="about_edu" className={styles.about_edu}>
            <Grid container spacing={3}>
              <Grid item xs></Grid>
              <Grid item sm={6}>
                <h1 className={styles.title}>{dataHome[0].title_1}</h1>
              </Grid>
              <Grid item xs></Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item sm={1}></Grid>
              <Grid item xs={12} sm={10}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid
                    container
                    spacing={4}
                    // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    {dataHome[0].about_edu.map((a, i) => {
                      return (
                        <Grid key={i + 11324} item xs={12} sm={6} md={3}>
                          <div
                            className={`${styles.card} ${styles.about_edu_card}`}
                          >
                            <h4>{a.title}</h4>
                            <MyImage image={a.img_src} />
                          </div>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={1} sm={1}></Grid>
            </Grid>
          </div>
          {/* ###################### */}
          <div className={styles.choice_edu}>
            <Grid container>
              <Grid item sm></Grid>
              <Grid item sm={6}>
                <h1 className={styles.title}>{dataHome[0].title_2}</h1>
              </Grid>
              <Grid item sm></Grid>
            </Grid>

            <Grid container spacing={1}>
              <Grid item sm></Grid>
              <Grid item sm={8}>
                <p className={styles.title_desc}>{dataHome[0].t2_desc}</p>
              </Grid>
              <Grid item sm></Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item sm={1}></Grid>
              <Grid item xs={12} sm={10}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={4}>
                    {dataHome[0].choice_edu.map((a, i) => {
                      return (
                        <Grid key={i + 11324} item xs={12} md={6}>
                          <Link to={`/course${a.url}`}>
                            <div
                              className={`${styles.card} ${styles.choice_edu_card}`}
                            >
                              <BsFillArrowUpRightCircleFill />
                              <h3 style={{ color: "#333" }}>{a.title}</h3>
                              <MyImage image={a.img_src} />
                            </div>
                          </Link>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={1} sm={1}></Grid>
            </Grid>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Home;
