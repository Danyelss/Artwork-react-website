import React from "react";
import { useParams, Link } from "react-router-dom";
import '../App.css';
import HeaderComponent from "../components/header";
import DynamicGallery from "../components/DynamicGallery";
import { getListWithAllTheImages } from '../utils/imageExtraction';


const ModalImage = (photo) => {
    console.log(photo.photo);
    let { section } = useParams();

    return (
        <div className="insideModalContainer">
            <img src={photo.photo.url} className="modalImageSize" />
            <div>
                <p className="insideModalDescription">
                {photo.photo.description}
                </p>
                <Link to={"/" + section + "/articles/" +photo.photo.postId}>
                    <button className="insideModalButton">Către articol</button>
                </Link>
            </div>
        </div >
    );
}

export default ModalImage; 