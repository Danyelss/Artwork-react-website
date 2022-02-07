import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../App.css';
import { getListRandomImages } from '../utils/imageExtraction';

const ImageDisplay = (image) => {
    let list = getListRandomImages("metalo");
    return (
        <div className="">
            <div className=""></div>
            <h1 className=""></h1>
        </div>
    );
}

export default ImageDisplay; 