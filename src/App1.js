//v6

import { Route, Routes } from "react-router-dom";
import About from "./components1/About";
import Dashboard from "./components1/Dashboard";
import Home from "./components1/Home";
import Layout from "./components1/Layout";
import NoMatch from "./components1/NoMatch";

//npm install react-router-dom (@사용할버전)
const App = () => {
  return (
    <div>
      <h1> basic Example</h1>
      {/*

*/}

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes> */}

      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
