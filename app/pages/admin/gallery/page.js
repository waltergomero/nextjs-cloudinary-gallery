import React from 'react'

import CloudinaryUnsignedUploadImage from './cloudinaryUnsignedUploadImage'
import cloudinary from '@/lib/cloudinary';
import GalleryGrid from "./gallery-grid";
import { SearchForm } from "./search-form";


const GalleryPage = async (search) => {

  const results = (await cloudinary.v2.search
    //.expression(`resource_type:image${search ? ` AND tags=${search}` : ""}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) ;


  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between mt-8">
          <h1 className="text-4xl font-bold">Photo Gallery</h1>
          <CloudinaryUnsignedUploadImage />
        </div>

        <GalleryGrid images={results.resources} />
      </div>
    </section>
    
  )
}

export default GalleryPage