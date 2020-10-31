import React from "react";
import "./gallery.scss";

function Gallery() {
  return (
    <>
      <div className="galleryid" id="gallery">
        <div className="gal_container">
          <div className="title">
            <h1>Gallery</h1>
          </div>

          <div className="gallery-wrap">
            <div className="item item-1"></div>
            <div className="item item-2"></div>
            <div className="item item-3"></div>
            <div className="item item-4"></div>
            <div className="item item-5"></div>
            <div className="item item-6"></div>
            <div className="item item-7"></div>
            <div className="item item-8"></div>
            <div className="item item-9"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
