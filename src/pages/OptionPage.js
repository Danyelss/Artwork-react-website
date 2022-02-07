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
        <div className="">
            <div onClick={optionClick("painting")}>
                <ImageDisplay section="painting" />
                <div className="optionCenteredTop">Compot</div>
            </div>
            <div className="optionSpacer">   </div>
            <div onClick={optionClick("metalo")}>
                <ImageDisplay section="metalo" />
                            <div className="optionCenteredDown">Comsadaspot</div>

            </div>
        </div>
    );
}

export default OptionPage; 