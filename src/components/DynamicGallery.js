import React from 'react';
import { useParams, Link } from "react-router-dom";

const DynamicGallery = ({ photos, lastIsFirst }) => {

  let imageList = [];
  let { section } = useParams();
  if (lastIsFirst) {
    photos.slice().reverse().forEach((photo) => {
      imageList.push(
        <div>
          <Link to={"/" + section + "/artworks/" + photo.id}>
            <img key={photo.id} src={photo.url} className="galleryImage zoomS" />
          </Link>
        </div>
      )
    });
  } else {
    photos.forEach((photo) => {
      imageList.push(
        <div>
          <Link to={"/" + section + "/artworks/" + photo.id}>
            <img key={photo.id} src={photo.url} className="galleryImage zoomS" />
          </Link>
        </div>
      )
    });
  }

  return (
    <div className="galleryContainer">
      {imageList}
    </div>
  );
}

export default DynamicGallery;
