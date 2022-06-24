import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./videos.module.css";
import MyButton from "../../components/MyButton/MyButton";
import { db } from "../../firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import Loader from "../../components/Loader/Loader";
import Grid from "@mui/material/Grid";
import ListItemButton from "@mui/material/ListItemButton";
import Player from "../../components/VideoPlayer/Player";
const Videos = () => {
  let { page_name } = useParams();

  const userCollectionRef = collection(db, `${page_name}_videos`);

  const [dataVideosPage, setdataVideosPage] = useState();
  const [index, setindex] = useState(0);
  const [ii, setii] = useState("");
  const getData = async () => {
    try {
      const data = await getDocs(userCollectionRef);
      setdataVideosPage(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    } catch (err) {
      console.error(err);
    }
  };
  const [video, setvideo] = useState({
    video_src: "",
    title: "",
  });
  console.log(video);
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {" "}
      {dataVideosPage ? (
        <div className={`container ${styles.videos}`}>
          <ul className={styles.modules}>
            <li>
              {dataVideosPage.map((a, i) => {
                return (
                  <MyButton
                    key={a + i + 23456543}
                    onClick={() => {
                      console.log(a);

                      setindex(i);
                    }}
                    size="small"
                  >
                    {a.title}
                  </MyButton>
                );
              })}
            </li>
          </ul>

          <Grid
            container
            spacing={4}
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-start"
          >
            <Grid item md={7} sm={12}>
              <div className={styles.card_videos}>
                {video.video_src !== "" ? (
                  <Player
                    className={styles.video_player}
                    video_src={video.video_src}
                  />
                ) : (
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/education-b2f41.appspot.com/o/video.png?alt=media&token=768b0060-7940-4fd3-8f68-1edec671555b"
                    alt="ertg"
                    width="100%"
                  />
                )}
                {video.video_src !== "" && (
                  <>
                    <h2>{ii} - DARS</h2>
                    <p style={{ display: "flex" }}>
                      <h4 style={{ paddingRight: "5px" }}>MAVZU:</h4>{" "}
                      {video.title}
                    </p>
                  </>
                )}
              </div>
            </Grid>
            <Grid item md={5} sm={12}>
              <div className={`${styles.shadow} ${styles.list_videos}`}>
                {dataVideosPage[index].videos.length > 0 ? (
                  dataVideosPage[index].videos.map((a, i) => {
                    return (
                      <ListItemButton
                        onClick={() => {
                          console.log(i);
                          setvideo({
                            ...video,
                            video_src: a.video_src,
                            title: a.title,
                          });
                          setii(i + 1);
                        }}
                        className={styles.btn}
                        key={i + 75643231357}
                      >
                        <h5>{i + 1} - Dars</h5>
                        <p>{a.title}</p>
                      </ListItemButton>
                    );
                  })
                ) : (
                  <div>Video yo'q</div>
                )}
              </div>
            </Grid>
          </Grid>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Videos;
