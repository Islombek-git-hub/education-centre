import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import Layout from "./Layout";
import About from "./Pages/About/About";
import Course from "./Pages/Course/Course";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import Videos from "./Pages/Videos/Videos";
import RequireAuth from "./utils/PrivateRoute";
import { useState } from "react";
import { getCookie } from "./utils/cookie";
import LayoutAdmin from "./Pages/Admin/LayoutAdmin/LayoutAdmin";
import Students from "./Pages/Admin/Students/Students";
import Assignments from "./Pages/Admin/Assignments/Assigments";
import News from "./Pages/Admin/News/News";

function App() {
  const [login, setlogin] = useState(!!getCookie("jwt_token"));

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/about"
              element={
                <RequireAuth access={login}>
                  <About />
                </RequireAuth>
              }
            />
            <Route path="/course/:page_name" element={<Course />} />
            <Route path="/videos/:page_name" element={<Videos />} />
          </Route>

          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn setLogin={setlogin} />} />

          <Route path="/admin" element={<LayoutAdmin />}>
            <Route path="/admin/students" element={<Students />} />
            <Route path="/admin/assignments" element={<Assignments />} />
            <Route path="/admin/news" element={<News />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
