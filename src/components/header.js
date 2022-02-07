import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../App.css';

const HeaderComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="header" onClick={() => navigate(-1)}> 
    <h1>Back</h1>
    </div>
  );
}

export default HeaderComponent;