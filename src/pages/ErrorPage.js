import React from "react";
import { useParams, Link } from "react-router-dom";
import '../App.css';
import ImageDisplay from "../components/fourImagesOptionScreen";
import HeaderComponent from "../components/header";
import { getImageForErrorPage } from "../utils/imageExtraction";

const ErrorPage = () => {
    let url = getImageForErrorPage();
    return (
        <div>
            <HeaderComponent/>
            <img src={url}/>
        </div>
    );
}

export default ErrorPage; 