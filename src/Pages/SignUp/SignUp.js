import React from "react";
import styles from "./SignUp.module.css";
import MyImage from "../../components/MyImage/MyImage";

import Grid from "@mui/material/Grid";
import MyButton from "../../components/MyButton/MyButton";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
const SignUp = () => {
  return (
    <div className={styles.sign_up}>
      <div className={`container ${styles.sign_in_container}`}>
        <Grid
          container
          style={{ minHeight: "100vh" }}
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={6}
        >
          <Grid item xs={12} sm={6}>
            <Grid>
              <MyImage
                image={
                  "https://firebasestorage.googleapis.com/v0/b/education-b2f41.appspot.com/o/signUp.png?alt=media&token=76b997c2-fd9f-49c8-a219-25fb24141d90"
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
              <label className={styles.form_label} for="surname">
                FAMILIYA
              </label>
              <input
                className={styles.form_input}
                placeholder="Ismingizni kiriting"
                type="text"
                id="surname"
              />
              <label className={styles.form_label} for="phone">
                TELEFON
              </label>
              <input
                className={styles.form_input}
                placeholder="Ismingizni kiriting"
                type="text"
                id="phone"
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
              <label className={styles.form_label} for="password">
                PAROLNI TASDIQLASH
              </label>
              <input
                placeholder="Parolingizni qayta kiriting"
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
                    REGISTRATSIYA
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
              <Link to="/sign-in" className={styles.form_link}>
                Tizimga kirish
                <FaAngleDoubleRight />
              </Link>
            </form>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SignUp;
