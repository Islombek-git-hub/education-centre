import { useState, useEffect } from "react";
import styles from "./assignments.module.css";
import { db } from "../../../firebase/firebase-config";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import Loader from "../../../components/Loader/Loader";
import MyButton from "../../../components/MyButton/MyButton";
import { TiDelete } from "react-icons/ti";
import { BiEditAlt } from "react-icons/bi";

const Assigments = () => {
  const userCollectionRef = collection(db, "assignments");
  const [assignments, setAssignments] = useState([]);
  const [key, setKey] = useState(true);
  const [updateId, setUpdateId] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    desc: "",
  });
  const getassignments = async () => {
    try {
      const data = await getDocs(userCollectionRef);
      setAssignments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getassignments();
  }, [db]);

  const createUser = async () => {
    await addDoc(userCollectionRef, formData);
    setFormData({
      ...formData,
      title: "",
      desc: "",
    });
    getassignments();
  };
  const updateUser = async (id) => {
    const userDoc = doc(db, "assignments", id);
    await updateDoc(userDoc, formData);
    setFormData({
      ...formData,
      title: "",
      desc: "",
    });
    getassignments();
    setKey(true);
  };
  const deleteUser = async (id) => {
    const userDoc = doc(db, "assignments", id);
    await deleteDoc(userDoc);
    getassignments();
  };

  return (
    <div className={`container ${styles.assignments}`}>
      <form className={styles.form}>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => {
            setFormData({ ...formData, title: e.target.value });
          }}
          placeholder="Sarlavha..."
          className="form-control"
        />
        <textarea
          type="text"
          value={formData.desc}
          onChange={(e) => {
            setFormData({ ...formData, desc: e.target.value });
          }}
          placeholder="Matn..."
          className="form-control my-3"
        />
        <MyButton
          // className="btn btn-secondary"
          variant="contained"
          onClick={(e) => {
            e.preventDefault();
            key ? createUser() : updateUser(updateId);
          }}
          style={{
            borderRadius: "8px",
            backgroundColor: "#4a607a",
          }}
        >
          {key ? "QO'SHISH" : "O'ZGARTIRISH"}
        </MyButton>
      </form>
      <div className={styles.assignments_cards}>
        {assignments.length > 0 ? (
          assignments.map((a, i) => {
            return (
              <div className={styles.assignments_card} key={a.id}>
                <h4>{a.title}</h4>
                <p>{a.desc}</p>
                <div>
                  <MyButton
                    variant="contained"
                    style={{
                      borderRadius: "8px",
                      backgroundColor: "#4a607a",
                    }}
                    onClick={() => {
                      setFormData({
                        ...formData,
                        title: a.title,
                        desc: a.desc,
                      });
                      setUpdateId(a.id);
                      setKey(false);
                    }}
                  >
                    <BiEditAlt />
                  </MyButton>
                  <MyButton
                    variant="contained"
                    style={{
                      borderRadius: "8px",
                      backgroundColor: "#A89060",
                      marginLeft: "0.5rem",
                    }}
                    onClick={() => {
                      deleteUser(a.id);
                    }}
                  >
                    <TiDelete />
                  </MyButton>
                </div>
              </div>
            );
          })
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Assigments;
