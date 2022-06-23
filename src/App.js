import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import About from "./Pages/About/About";
import Course from "./Pages/Course/Course";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";
import Videos from "./Pages/Videos/Videos";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/course/:page_name" element={<Course />} />
            <Route path="/videos/:page_name" element={<Videos />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
