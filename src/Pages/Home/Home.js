import * as React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { db } from "../../firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import styles from "./Home.module.css";
import Loader from "../../components/Loader/Loader";
import MyImage from "../../components/MyImage/MyImage";
import MyButton from "../../components/MyButton/MyButton";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { FaAngleDoubleDown } from "react-icons/fa";
import { IconButton } from "@mui/material";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// #############################
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
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-start"
            >
              <Grid item sm={12} md={8}>
                <h1 className={styles.home_head_h1}>{dataHome[0].title}</h1>
                <p className={styles.home_head_p}>{dataHome[0].title_desc}</p>
                <IconButton>
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
            <h1>{dataHome[0].title_1}</h1>
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={3}
                // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {dataHome[0].about_edu.map((a, i) => {
                  return (
                    <Grid key={i + 11324} item xs={12} sm={6} md={3}>
                      <Item>ITEM</Item>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </div>
          {/* ###################### */}
          <div className={styles.choice_edu}>
            <h1 className={styles.choice_edu_title}>{dataHome[0].title_2}</h1>
            <p className={styles.choice_edu_desc}>{dataHome[0].t2_desc}</p>

            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                {dataHome[0].choice_edu.map((a, i) => {
                  return (
                    <Grid key={i + 11324} item xs={12} sm={6}>
                      <Item>ITEM</Item>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Home;
