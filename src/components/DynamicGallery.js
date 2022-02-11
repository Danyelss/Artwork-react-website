import React from 'react';
import { useParams, Link } from "react-router-dom";
import Popup from 'reactjs-popup';
import ModalImage from './modalImage';

const DynamicGallery = ({ photos, lastIsFirst }) => {

  let imageList = [];
  let { section } = useParams();
  if (lastIsFirst) {
    photos.slice().reverse().forEach((photo, index) => {
      console.log(photo.url);
      imageList.push(
        <div>
          <Popup trigger={<img key={index} src={photo.url} className="galleryImage zoomS" />}
            modal>
            {close => (
              <button onClick={() => {
                console.log('modal closed ');
                close();
              }} className="backOfModal">
                <ModalImage photo={photo}></ModalImage>
              </button>
            )}
          </Popup>
        </div>
      )
    });
  } else {
    photos.forEach((photo, index) => {
      imageList.push(
        <div>
          <Link to={"/" + section + "/artworks/" + photo.id}>
            <img key={index} src={photo.url} className="galleryImage zoomS" />
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
