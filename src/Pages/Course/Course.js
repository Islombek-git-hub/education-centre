import { useState, useEffect } from "react";
import styles from "./Course.module.css";
import { Link, useParams } from "react-router-dom";
import { db } from "../../firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import Loader from "../../components/Loader/Loader";
import MyImage from "../../components/MyImage/MyImage";
import Grid from "@mui/material/Grid";

import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
const Course = () => {
  let { page_name } = useParams();
  const userCollectionRef = collection(db, page_name);
  const [dataCourse, setdataCourse] = useState([]);
  const getData = async () => {
    try {
      const data = await getDocs(userCollectionRef);

      setdataCourse(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (err) {
      console.error(err);
    }
  };
  // console.log(dataCourse);
  useEffect(() => {
    getData();
  }, []);
  console.log(dataCourse);
  return (
    <>
      {dataCourse.length > 0 ? (
        <div className={styles.course}>
          <div className={`container ${styles.course_container}`}>
            <div className={styles.course_head}>
              <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-start"
              >
                <Grid item sm={12} md={7}>
                  <h1>{dataCourse[0].title}</h1>
                  <p>{dataCourse[0].desc}</p>
                </Grid>
                <Grid item xs={12} sm={8} md={5}>
                  <MyImage image={dataCourse[0].img_src} />
                </Grid>
              </Grid>
            </div>

            {dataCourse[0].course ? (
              dataCourse[0].course.map((a, i) => {
                return (
                  <Link key={i + 65432} to={`/videos${a.url}`}>
                    <div className={styles.course_box}>
                      <BsFillArrowUpRightCircleFill />
                      <MyImage image={a.img_src} />
                      <div>
                        <div className={styles.course_box_ul}>
                          <h3>{a.title}</h3>
                          <ul>
                            <li>
                              <h4>{a.module}</h4>
                            </li>
                            <li>{a.count_module}</li>
                          </ul>
                          <ul>
                            <li>
                              <h4>{a.duration}</h4>
                            </li>
                            <li>{a.count_videos} dars</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })
            ) : (
              <h1>Video yuklanmagan</h1>
            )}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Course;
