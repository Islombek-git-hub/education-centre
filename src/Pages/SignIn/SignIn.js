import React from "react";
import MyImage from "../../components/MyImage/MyImage";
import styles from "./SignIn.module.css";
import Grid from "@mui/material/Grid";
import MyButton from "../../components/MyButton/MyButton";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
const SignIn = () => {
  return (
    <div className={styles.sign_in}>
      <div className={`container ${styles.sign_in_container}`}>
        <Grid
          style={{ minHeight: "100vh" }}
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={6}
        >
          <Grid item xs={12} sm={6}>
            <Grid>
              <MyImage
                image={
                  "https://firebasestorage.googleapis.com/v0/b/education-b2f41.appspot.com/o/login.png?alt=media&token=8be5d173-69ce-4c5b-a9d9-72d2a6f6562a"
                }
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <form
              className={styles.form}
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <h3 className={styles.form_title}>LOGO</h3>
              <label className={styles.form_label} for="name">
                ISM
              </label>
              <input
                className={styles.form_input}
                placeholder="Ismingizni kiriting"
                type="text"
                id="name"
              />
              <label className={styles.form_label} for="password">
                PAROL
              </label>
              <input
                placeholder="Parolingizni kiriting"
                className={styles.form_input}
                type="password"
                id="password"
              />

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <MyButton
                    variant="contained"
                    style={{
                      borderRadius: "8px",
                      backgroundColor: "#4A607A",
                      width: "100%",
                    }}
                    type="submit"
                  >
                    KIRISH
                  </MyButton>
                </Grid>
                <Grid item xs={6}>
                  <MyButton
                    variant="contained"
                    style={{
                      borderRadius: "8px",
                      backgroundColor: "#A89060",
                      width: "100%",
                    }}
                    type="reset"
                  >
                    TOZALASH
                  </MyButton>
                </Grid>
              </Grid>
              <Link to="/sign-up" className={styles.form_link}>
                Ro’yxatdan o’tish
                <FaAngleDoubleRight />
              </Link>
            </form>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SignIn;
