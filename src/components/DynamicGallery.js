import React from 'react';
import { Link } from 'react-router-dom';
import { getListRandomImages } from '../utils/imageExtraction';

const DynamicGallery = ({ photos }) => {

  let imageList = [];
  photos.forEach((url, index) => {
    imageList.push(
      <Link to="/">
    <img key={index} src={url} className="galleryImage zoomS"/>
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
