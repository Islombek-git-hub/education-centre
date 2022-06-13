import { Link } from "react-router-dom";
import styles from "./Error.module.css";
import MyImage from "../../components/MyImage/MyImage";
const Error = () => {
  return (
    <div className={styles.error}>
      <MyImage image="https://firebasestorage.googleapis.com/v0/b/education-b2f41.appspot.com/o/404.png?alt=media&token=4afa1b67-4e00-4eb4-97e7-a8733f4e51fc" />
      <Link to="/">HOME</Link>
    </div>
  );
};

export default Error;
