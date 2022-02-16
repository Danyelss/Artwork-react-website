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
            <img className="fill" src={url}/>
            <h1 className="errorPageText">404 <br/> Page Not Found</h1>
        </div>
    );
}

export default ErrorPage; 