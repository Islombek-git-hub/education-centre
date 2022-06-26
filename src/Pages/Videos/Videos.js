import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./videos.module.css";
import MyButton from "../../components/MyButton/MyButton";
import { db } from "../../firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import Loader from "../../components/Loader/Loader";
import Grid from "@mui/material/Grid";
import MyImage from "../../components/MyImage/MyImage";
import ListItemButton from "@mui/material/ListItemButton";
import Player from "../../components/VideoPlayer/Player";
import { useSelector } from "react-redux";

const Videos = () => {
  let { page_name } = useParams();
  const user = useSelector((state) => state.user);
  const userCollectionRef_assignment = collection(db, "assignments");

  const userCollectionRef = collection(db, `${page_name}_videos`);
  const [dataVideosPage, setdataVideosPage] = useState();
  const [assignments, setAssignments] = useState([]);
  const [activeBtn, setActiveBtn] = useState(true);
  const [index, setindex] = useState(0);
  const [ii, setii] = useState("");
  const getData = async () => {
    try {
      const data = await getDocs(userCollectionRef);
      const data_assignments = await getDocs(userCollectionRef_assignment);
      setdataVideosPage(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      setAssignments(
        data_assignments.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    } catch (err) {
      console.error(err);
    }
  };
  console.log("test", assignments);

  const [video, setvideo] = useState({
    video_src: "",
    title: "",
  });
  // console.log(video);
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {" "}
      {dataVideosPage ? (
        <div className={`container ${styles.videos}`}>
          {user.data.course > 0 ? (
            <>
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
                    <Grid container spacing={2} style={{}}>
                      <Grid item xs={6}>
                        <MyButton
                          className={activeBtn ? styles.btn_on : styles.btn_off}
                          onClick={() => setActiveBtn(true)}
                        >
                          Videolar
                        </MyButton>
                      </Grid>
                      <Grid item xs={6}>
                        <MyButton
                          className={activeBtn ? styles.btn_off : styles.btn_on}
                          onClick={() => setActiveBtn(false)}
                        >
                          Topshiriqlar
                        </MyButton>
                      </Grid>
                    </Grid>
                    {activeBtn ? (
                      dataVideosPage[index].videos.length > 0 ? (
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
                      )
                    ) : (
                      <div className={styles.assignment}>
                        {assignments.map((a, i) => {
                          return (
                            <div
                              key={i + 42355657}
                              className={styles.assignment_card}
                            >
                              <h4>{a.title}</h4>
                              <p>{a.desc}</p>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </Grid>
              </Grid>
            </>
          ) : (
            <div className={styles.lock_img}>
              <h3>Ruxsat yo'q</h3>
              <MyImage image="https://firebasestorage.googleapis.com/v0/b/education-b2f41.appspot.com/o/lock.png?alt=media&token=4ed06673-16ea-4a5e-95ad-283ee94f74cb" />
            </div>
          )}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Videos;
