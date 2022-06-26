import { useState, useEffect } from "react";
import styles from "./Students.module.css";
import { db } from "../../../firebase/firebase-config";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { Checkbox } from "@mui/material";
import Loader from "../../../components/Loader/Loader";
import MyButton from "../../../components/MyButton/MyButton";
const Students = () => {
  const userCollectionRef = collection(db, "students");
  const [students, setStudents] = useState([]);
  const [key, setKey] = useState(true);
  const [updateId, setUpdateId] = useState("");

  const [formData, setFormData] = useState({
    course: false,
    name: "",
    surname: "",
    tel_number: "",
    password: "",
  });
  const getStudents = async () => {
    try {
      const data = await getDocs(userCollectionRef);
      setStudents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getStudents();
  }, [db]);

  const createUser = async () => {
    await addDoc(userCollectionRef, formData);
    setFormData({
      ...formData,
      course: false,
      name: "",
      surname: "",
      tel_number: "",
      password: "",
    });
    getStudents();
  };
  const updateUser = async (id) => {
    const userDoc = doc(db, "students", id);
    await updateDoc(userDoc, formData);
    setFormData({
      ...formData,
      course: false,
      name: "",
      surname: "",
      tel_number: "",
      password: "",
    });
    getStudents();
    setKey(true);
  };
  const deleteUser = async (id) => {
    const userDoc = doc(db, "students", id);
    await deleteDoc(userDoc);
    getStudents();
  };

  // ##########################################################
  return (
    <div className={`container ${styles.students}`}>
      <form className="form">
        <input
          type="text"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
          placeholder="Ism..."
          className={styles.form_input}
        />
        <input
          type="text"
          value={formData.surname}
          onChange={(e) => {
            setFormData({ ...formData, surname: e.target.value });
          }}
          placeholder="Familiya..."
          className={styles.form_input}
        />
        <input
          type="text"
          value={formData.tel_number}
          onChange={(e) => {
            setFormData({ ...formData, tel_number: e.target.value });
          }}
          className={styles.form_input}
          placeholder="Telefon..."
        />
        <input
          type="text"
          value={formData.password}
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }}
          placeholder="Parol..."
          className={styles.form_input}
        />
        <Checkbox
          value={formData.course}
          onChange={(e) => {
            setFormData({ ...formData, course: !formData.course });
          }}
        />{" "}
        Kurs
        <br />
        <MyButton
          variant="contained"
          style={{
            borderRadius: "8px",
            backgroundColor: "#4a607a",
          }}
          onClick={(e) => {
            e.preventDefault();
            key ? createUser() : updateUser(updateId);
          }}
        >
          {key ? "QO'SHISH" : "O'ZGARTIRISH"}
        </MyButton>
      </form>
      <table className={styles.form}>
        <thead>
          <tr className={styles.form_tr}>
            <th>#</th>
            <th>Ism</th>
            <th>Familiya</th>
            <th>Telefon</th>
            <th>Parol</th>
            <th>Kurs</th>
            <th>_</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((user, i) => {
              return (
                <tr className={styles.form_td} key={user.id}>
                  <td>{i + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.surname}</td>
                  <td>{user.tel_number}</td>
                  <td>{user.password}</td>
                  <td>{user.course ? "Ochiq" : "Yopiq"}</td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        setFormData({
                          ...formData,
                          name: user.name,
                          surname: user.surname,
                          tel_number: user.tel_number,
                          password: user.password,
                          course: user.course,
                        });
                        setUpdateId(user.id);
                        setKey(false);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        deleteUser(user.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>
                <Loader />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
