import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import '../App.css';
import HomepageImage from "../components/homepageImage";

const HomePage = () => {

  //const navigate = useNavigate();

  const optionClick = (option) => {
    //navigate("/option/"+option);
    
  }

  return (
    <div className="splitScreen">
      <div className="topPane fillScreen" onClick={optionClick("painting")}><HomepageImage image="painting" /></div>
      <div className="bottomPane fillScreen" onClick={optionClick("metalo")}><HomepageImage image="metalo" /></div>
    </div>
  );
}

export default HomePage;