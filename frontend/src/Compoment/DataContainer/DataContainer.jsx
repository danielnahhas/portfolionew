import React from "react";
import "./DataContainer.css";
import Card from "../Card/Card";
function DataContainer(props) {
  return (
    <div id="services" className="container">
      <h1>My Services</h1>
      <div id="dataContainer" className="data-container">
        {props.data.map((d, i) => {
          return <Card key={i} data={d} />;
        })}
      </div>
    </div>
  );
}

export default DataContainer;
