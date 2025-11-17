"use client";
import { useState } from "react";
import Image from "next/image";

const ImageGallery = ({ images, title, thumbnail }) => {
    const [selectedImage, setSelectedImage] = useState(thumbnail);
    return (
      <div>
        <Image
          loading="eager"
          src={selectedImage}
          alt={title}
          width={500}
          height={300}
          className="rounded-4xl bg-white shadow-lg"
        />
        <div className="mt-4 flex gap-4">
          {images.slice(0, 3).map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`${title} - billede ${index + 1}`}
              width={90}
              height={90}
              onClick={() => setSelectedImage(image)}
              className="rounded-2xl bg-white shadow-lg transition-transform duration-200 hover:scale-105 hover:cursor-pointer"
            />
          ))}
        </div>
      </div>
    );
}
 
export default ImageGallery;