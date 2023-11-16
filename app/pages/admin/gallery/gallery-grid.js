"use client";

import { ImageGrid } from "@/components/image-grid";
import { CloudinaryImage } from "@/components/cloudinary-image";

export default function GalleryGrid({ images }) {
  return (
    <ImageGrid
      images={images}
      getImage={(images) => {
        return (
          <CloudinaryImage
            key={images.public_id}
            imageData={images}
            width="400"
            height="300"
            alt="an image of something"
          />
        );
      }}
    />
  );
}
