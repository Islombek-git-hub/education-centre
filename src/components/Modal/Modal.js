import React from "react";
import styles from "./Modal.module.css";
import { modalFun } from "../../redux/Actions/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.modal);

  return (
    <div
      className={selector ? styles.modal : styles.modal_none}
      onClick={() => {
        dispatch(modalFun());
      }}
    >
      <div
        className={styles.modal_child}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
