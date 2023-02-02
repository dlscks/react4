//v6

import { Route, Routes } from "react-router-dom";
import About from "./components2/About";
import Dashboard from "./components2/Dashboard";
import Home from "./components2/Home";
import Layout from "./components2/Layout";
import NoMatch from "./components2/NoMatch";

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
