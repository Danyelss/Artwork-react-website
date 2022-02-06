import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../App.css';

const HomepageImage = (image) => {
    console.log(image.image);
    return (
        <div className={image.image == "metalo" ? "metaloBackground box" : "paintingBackground box"}>
            <div className="blackOverlay">
                <div className="textcenter"></div>
                <h1 className="homepageText">{image.image == "metalo" ? "Metaloplastie" : "Pictură"}</h1>
            </div>
        </div>
    );
}

export default HomepageImage;