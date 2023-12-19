import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Compoment/Header/Header";
import About from "./Compoment/About/About";
// import DataContainer from "./Compoment/DataContainer/DataContainer";
import ExperienceList from "./Compoment/ExperienceList/ExperienceList";

import Contact from "./Compoment/Contact/Contact";
import MyWork from "./Compoment/MyWork/MyWork";
import Login from "./Compoment/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<About />} />
          <Route path="/ExperienceList" element={<ExperienceList />} />
          <Route path="/MyWork" element={<MyWork />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>

        {/* <DataContainer data={experiences} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
