import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../App.css';
import HomepageImage from "../components/homepageImage";

const HomePage = () => {
  return (
    <div className="splitScreen">
      <div className="topPane fillScreen"><HomepageImage image="painting"/></div>
      <div className="bottomPane fillScreen"><HomepageImage image="metalo"/></div>
    </div>
  );
}

export default HomePage;