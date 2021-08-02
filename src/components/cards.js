import React from "react";

const cards = (props) => {
  return (
    <div className="card" key={props.id}>
      <img
        className="logo-picture"
        src={`./images/${props.logoPicture}`}
        alt={props.logoName}
      />
    </div>
  );
};

export default cards;
