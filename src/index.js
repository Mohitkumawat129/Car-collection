import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import CarData from "./CarData";
import "./index.css";
ReactDOM.render(
  <>
    <h1 className="heading_style">CAR COLLECTION</h1>
    {CarData.map((val) => {
      return (
        <Card
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
