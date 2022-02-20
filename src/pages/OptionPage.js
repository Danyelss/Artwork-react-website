import React from "react";
import { useParams, Link } from "react-router-dom";
import '../App.css';
import ImageDisplay from "../components/fourImagesOptionScreen";
import HeaderComponent from "../components/header";
import { Navigate } from "react-router-dom";

const OptionPage = () => {

    let { section } = useParams();

    let display = false;

    section === "metalo" || section === "painting" ? display = true : display = false;

    if (display) {
        let pathToArtworks = "/" + section + "/artworks";
        let pathToArticles = "/" + section + "/articles";

        return (
            <div>
                <HeaderComponent />
                <div className="optionAbsolute">
                    <Link to={pathToArtworks}>
                        <div className="zoomS optionAbsoluteTop">
                            <ImageDisplay section={section} />
                            <div className="optionCenteredTop optionText">Lucrări</div>
                        </div>
                    </Link>

                    <Link to={pathToArticles}>
                        <div className="zoomS optionAbsoluteBottom">
                            <ImageDisplay section={section} />
                            <div className="optionCenteredDown optionText">Articole</div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    } else {
        return (<Navigate to="/404" />);
    }
}

export default OptionPage; 