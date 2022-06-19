import { useState, useEffect } from "react";
import styles from "./Course.module.css";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import Loader from "../../components/Loader/Loader";
import MyImage from "../../components/MyImage/MyImage";
import Grid from "@mui/material/Grid";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
const Course = () => {
  let { page_name } = useParams();
  const userCollectionRef = collection(db, page_name);
  const [dataCourse, setdataCourse] = useState([]);
  // console.log(dataCourse[0].about_edu);
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
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Course;
