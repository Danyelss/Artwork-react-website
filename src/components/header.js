import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../App.css';
import square from "../assets/square.png";
import arrow from "../assets/arrow.png";

const HeaderComponent = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(-1)}>
      <div className="headerParent">
        <img className="headerArrow" src={arrow}></img>
        <img className="headerSquare" src={square}></img>
        <img className="headerSquare" src={square}></img>
        <img className="headerSquare" src={square}></img>
        <img className="headerSquare" src={square}></img>
        <img className="headerSquare" src={square}></img>
        <img className="headerSquare" src={square}></img>
        <img className="headerSquare" src={square}></img>
        <img className="headerSquare" src={square}></img>
      </div>
    </div>
  );
}

export default HeaderComponent;