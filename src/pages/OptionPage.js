import React from "react";
import { useParams, Link } from "react-router-dom";
import '../App.css';
import ImageDisplay from "../components/fourImagesOptionScreen";
import HeaderComponent from "../components/header";
import { useNavigate, Navigate, } from "react-router-dom";

const OptionPage = () => {
    let navigate = useNavigate();

    let { section } = useParams();
    let pathToArtworks = "/" + section + "/artworks";
    let pathToArticles = "/" + section + "/articles";

    let display = false;

    section === "metalo" || section === "painting" ? display = true : display = false;

    if( display) {
    return (
        <div className="optionAbsolute">
            <HeaderComponent/>
            <Link to={pathToArtworks}>
                <div className="zoomS optionAbsoluteTop">
                    <ImageDisplay section={section} />
                    <div className="optionCenteredTop optionText">LUCRĂRI</div>
                </div>
            </Link>

            <Link to={pathToArticles}>
                <div className="zoomS optionAbsoluteBottom">
                    <ImageDisplay section={section} />
                    <div className="optionCenteredDown optionText">ARTICOLE</div>
                </div>
            </Link>


        </div>
    )} else {
        return ( <Navigate to="/home" /> );
    }
}

export default OptionPage; 