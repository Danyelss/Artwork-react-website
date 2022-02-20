import React from "react";
import { useParams, Link } from "react-router-dom";
import '../App.css';
import HeaderComponent from "../components/header";
import DynamicGallery from "../components/DynamicGallery";
import { getListWithAllTheImages } from '../utils/imageExtraction';

const ModalImage = ({ photo, fromArticle }) => {
    let { section } = useParams();

    return (
        <div className="insideModalContainer">
            <img src={photo.url} className="modalImageSize" />
            <div>
                <p className="insideModalDescription">
                    {photo.description}
                </p>
                {fromArticle ? <div></div> :
                    <Link to={"/" + section + "/articles/" + photo.postId}>
                        <button className="insideModalButton">Către articol</button>
                    </Link>}
            </div>
        </div >
    );
}

export default ModalImage; 