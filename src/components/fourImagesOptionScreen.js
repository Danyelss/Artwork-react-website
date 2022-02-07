import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../App.css';
import { getListRandomImages } from '../utils/imageExtraction';

const ImageDisplay = (section) => {
    let list = getListRandomImages(section.section);
    return (
        <div className="imageOptionContainer">
            <img className="imageOption" src={list[0]} alt="Artwork" />
            <img className="imageOption" src={list[1]} alt="Artwork" />
            <img className="imageOption" src={list[2]} alt="Artwork" />
            <img className="imageOption" src={list[3]} alt="Artwork" />
        </div>
    );
}

export default ImageDisplay; 