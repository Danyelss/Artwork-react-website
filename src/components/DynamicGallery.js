import React from 'react';
import { useParams, Link } from "react-router-dom";

const DynamicGallery = ({ photos }) => {

  let imageList = [];
  let { section } = useParams();
  photos.forEach((url, index) => {
    imageList.push(
      <Link to={"/" + section + "/artworks/" + index}>
        <img key={index} src={url} className="galleryImage zoomS" />
      </Link>
    )
  });

  return (
    <div className="galleryContainer">
      {imageList}
    </div>
  );
}

export default DynamicGallery;
