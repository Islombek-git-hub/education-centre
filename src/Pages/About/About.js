import { useState, useEffect } from "react";
import styles from "./About.module.css";
import { db } from "../../firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import Loader from "../../components/Loader/Loader";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MyImage from "../../components/MyImage/MyImage";

const About = () => {
  const userCollectionRef = collection(db, "about");
  const [dataAbout, setDataAbout] = useState([]);

  const getData = async () => {
    try {
      const data = await getDocs(userCollectionRef);
      setDataAbout(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (err) {
      console.error(err);
    }
  };
  console.log();
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {dataAbout.length > 0 ? (
        <div className={styles.about}>
          {/* ################### */}
          <div className={styles.autoplay_video_box}>
            <div className={styles.video_box_effect}>
              <h2 className={styles.video_box_effect_h1}>
                {dataAbout[0].about_title}
              </h2>
            </div>
            <video width="100%" height="auto" autoPlay muted loop>
              <source
                src="https://firebasestorage.googleapis.com/v0/b/education-b2f41.appspot.com/o/about_video.mp4?alt=media&token=4388ad84-d614-41d9-a92e-4401ab8ca772"
                type="video/mp4"
              />
            </video>
          </div>

          {/* ################### */}
          <div className={`container ${styles.statistics}`}>
            <Grid container>
              <Grid item sm={1}></Grid>
              <Grid item xs={12} sm={10}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid
                    container
                    spacing={4}
                    // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    {dataAbout[0].statistics.map((a, i) => {
                      return (
                        <Grid key={i + 1324232124} item xs={12} sm={6} md={4}>
                          <div
                            className={`${styles.card} ${styles.stsistics_box}`}
                          >
                            <h1>{a.count}</h1>
                            <p>{a.title}</p>
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
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default About;