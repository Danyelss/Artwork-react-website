import React from "react";
import '../App.css';
import HomepageImage from "../components/homepageImage";
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div className="splitScreen">
      <Link to="/option/painting">
        <div className="topPane fillScreen"><HomepageImage image="painting" /></div>
        </Link>
        <Link to="/option/metalo">
      <div className="bottomPane fillScreen"><HomepageImage image="metalo" /></div>
      </Link>

    </div>
  );
}

export default HomePage;