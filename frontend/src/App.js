import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Header from "./Compoment/Header/Header";
import About from "./Compoment/About/About";
// import DataContainer from "./Compoment/DataContainer/DataContainer";
import ExperienceList from "./Compoment/ExperienceList/ExperienceList";

import Contact from "./Compoment/Contact/Contact";
import MyWork from "./Compoment/MyWork/MyWork";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <About />
        <ExperienceList />
        {/* <DataContainer data={experiences} /> */}
        <MyWork />
        <Contact />
      </BrowserRouter>
    </div>
  );
}

export default App;
