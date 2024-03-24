import React from "react";

import Image1 from "../assets/gallery3.jpg";
import Image2 from "../assets/gallery6.jpg";
import Image3 from "../assets/gallery5.jpg";
import Image4 from "../assets/gallery7.jpg";
import Image5 from "../assets/gallery8.jpg";

const ImageGallery = () => {
  return (
    /* Parent Container */
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-16 mb-12">
      <div>
        <img src={Image1} alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        <img className="w-full" src={Image2} alt="" />
        <img className="w-full" src={Image3} alt="" />
        <img className="w-full" src={Image4} alt="" />
        <img className="w-full" src={Image5} alt="" />
      </div>
    </div>
  );
};

export default ImageGallery;
