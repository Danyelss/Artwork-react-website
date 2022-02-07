import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import '../App.css';
import ImageDisplay from "../components/fourImagesOptionScreen";

const OptionPage = () => {

    //const navigate = useNavigate();


    const optionClick = (option) => {
        //navigate("/option/"+option);

    }

    return (
        <div className="">
            <div className="" onClick={optionClick("painting")}><ImageDisplay section="painting" /></div>
            <div className="App-header"/>
            <div className="" onClick={optionClick("metalo")}><ImageDisplay section="metalo" /></div>
        </div>
    );
}

export default OptionPage; 