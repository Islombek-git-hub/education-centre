import { NavLink, Outlet } from "react-router-dom";
import styles from "./LayoutAdmin.module.css";

const LayoutAdmin = () => {
  return (
    <>
      <div className={styles.header_admin}>
        <ul className={`container ${styles.header_admin_container}`}>
          <li className="admin_active">
            <NavLink to="/admin/students">
              <p>O'quvchilar</p>
            </NavLink>
          </li>
          <li className="admin_active">
            <NavLink to="/admin/assignments">
              <p>Topshiriqlar</p>
            </NavLink>
          </li>
          <li className="admin_active">
            <NavLink to="/admin/news">
              <p>Yangiliklar</p>
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default LayoutAdmin;
