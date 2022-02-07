import React from "react";
import { useParams, Link } from "react-router-dom";
import '../App.css';
import ImageDisplay from "../components/fourImagesOptionScreen";
import HeaderComponent from "../components/header";

const OptionPage = () => {

    let { section } = useParams();
    let pathToArtworks = "/" + section + "/artworks";
    let pathToArticles = "/" + section + "/articles";

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
    );
}

export default OptionPage; 