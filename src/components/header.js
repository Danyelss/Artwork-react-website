import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../App.css';
import square from "../assets/square.png";

const HeaderComponent = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(-1)}>
      <div className="headerParent">
        <div className="headerArrow"></div>
        <div className="headerSquare"></div>
      </div>
    </div>
  );
}

export default HeaderComponent;