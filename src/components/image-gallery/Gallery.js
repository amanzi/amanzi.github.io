import React from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "./styles.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";

const PhotoGallery = ({ photos, title }) => {
  return (
    <div>
    <h2>{title}</h2>

    <LightGallery speed={1000} plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen]} mode="lg-fade">
      {photos.map((item) => (
        <a key={item.id} href={item.image} data-sub-html={`<h4>${item.title}</h4>`}>
          <img className="gallery-img" src={item.image} alt={item.title} style={{width: "225px", height: "165px", border: "3px solid #0e6e9b", margin: "5px", borderRadius: "10px"}} />
        </a>
      ))}
    </LightGallery>
    </div>
  );
};

export default PhotoGallery;
