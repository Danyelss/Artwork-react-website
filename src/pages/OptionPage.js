import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import '../App.css';
import ImageDisplay from "../components/fourImagesOptionScreen";

const OptionPage = () => {

    //const navigate = useNavigate();


    const optionClick = (option) => {
        //navigate("/option/"+option); <ImageDisplay section="painting" />

    }

    return (
        <div className="optionAbsolute">

            <div className="zoomS optionAbsoluteTop" onClick={optionClick("painting")}>
                <ImageDisplay section="painting" />
                <div className="optionCenteredTop optionText">LUCRĂRI</div>
            </div>


            <div className="zoomS optionAbsoluteBottom" onClick={optionClick("metalo")}>
                <ImageDisplay section="metalo" />
                <div className="optionCenteredDown optionText">ARTICOLE</div>
            </div>


        </div>
    );
}

export default OptionPage; 