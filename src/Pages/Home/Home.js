import { useState, useEffect } from "react";
import { db } from "../../firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";
const Home = () => {
  const userCollectionRef = collection(db, "home");
  const [dataHome, setDataHome] = useState([]);

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
    <div>
      {dataHome.length > 0 ? (
        <>
          <h1>{dataHome[0].title}</h1>
          <p>{dataHome[0].title_desc}</p>
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Home;
