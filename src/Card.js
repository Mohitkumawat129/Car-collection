import React from "react";
import Navbar from "./Navbar";
import "./Style/index.css";
function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgSrc} alt="myCar" className="card_img" />
          <div className="card_info">
            <span className="card_category">{props.title}</span>
            <h3 className="card_title">{props.cName} </h3>
            <a href={props.link} target="_blank">
              <button>Search</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
