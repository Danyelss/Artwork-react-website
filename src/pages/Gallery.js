import React from "react";
import { useParams, Link } from "react-router-dom";
import '../App.css';
import HeaderComponent from "../components/header";
import DynamicGallery from "../components/DynamicGallery";
import { getListWithAllTheImages } from '../utils/imageExtraction';


const Gallery = () => {

    let { section } = useParams();
    console.log(section);
    let pathToArtworks = "/" + section + "/artworks";

    let list = getListWithAllTheImages(section);

    console.log(list);

    return (
        <div>
            <HeaderComponent />
            <DynamicGallery photos={list} />
        </div>
    );
}

export default Gallery; 
