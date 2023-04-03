import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import CarData from "./CarData";

ReactDOM.render(
  <>
    <h1 className="heading_style">CAR COLLECTION</h1>
    {CarData.map((val) => {
      return (
        <Card
          key={val.id}
          imgSrc={val.imgSrc}
          title={val.title}
          cName={val.CName}
          link={val.link}
        />
      );
    })}
  </>,
  document.getElementById("root")
);
