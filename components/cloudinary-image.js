"use client";

import { CldImage, CldImageProps } from "next-cloudinary";
//import { SearchResult } from '@/app/pages/admin/gallery/search-form';


export function CloudinaryImage(props) {
  const { imageData} = props;

  return (
    <div className="relative">
      <CldImage {...props} src={imageData.public_id} className="rounded-lg" />

    </div>
  );
}
