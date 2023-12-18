import React from "react";
import "./Card.css";

function Card(props) {
  const { experiences } = props;
  return (
    <div className="data-item">
      <p className="data-id">{experiences.id}</p>
      <p>
        <span className="data-title">{experiences.title}</span>
      </p>
      <span className="data-details">{experiences.desc}</span>
    </div>
  );
}

export default Card;
