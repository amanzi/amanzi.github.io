import React, { useState } from "react";
import { LightBox } from "react-lightbox-pack";
import "react-lightbox-pack/dist/style.css";
import "./styles.css";

const GallerySection = ({ gallery, title }) => {
  const [toggle, setToggle] = useState(false);
  const [sIndex, setSIndex] = useState(0);

  const lightBoxHandler = (state, index) => {
    setToggle(state);
    setSIndex(index);
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Enter" || event.key === " ") {
      lightBoxHandler(true, index);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
        {gallery.map((item, index) => (
          <div
            key={item.id}
            style={{ display: "inline-block", margin: "5px", cursor: "pointer" }}
            onClick={() => lightBoxHandler(true, index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            tabIndex={0}
            role="button"
            aria-label={`View ${item.title}`}
          >
            <img 
              src={item.image}
              alt={item.title}
              style={{ maxHeight: "25vh", maxWidth: "25vw" }}
            />
          </div>
        ))}
      </div>

      <LightBox
        state={toggle}
        event={lightBoxHandler}
        data={gallery.map((item) => ({
          id: item.id,
          image: item.image,
          title: item.title,
        }))}
        imageWidth="60vw"
        imageHeight="70vh"
        thumbnailHeight={50}
        thumbnailWidth={50}
        setImageIndex={setSIndex}
        imageIndex={sIndex}
      />
    </div>
  );
};

export default GallerySection;