"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import Thumbnail from "lightgallery/plugins/thumbnail";

const GalleryGrid = ({images}) => {

  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
        <div>
          <LightGallery
            mode="lg-fade"
            onInit={onInit}
            speed={500}
            plugins={[Thumbnail, lgZoom]}
          >       
        {images && images?.map((item) =>(
          <Link
             key={item.id}
             href={item.url}
             shallow
             className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
                  >
              <Image
              alt="Next.js Conf photo"
              className="transform rounded-lg brightness-60 transition will-change-auto group-hover:brightness-110"
              style={{ transform: 'translate3d(0, 0, 0)' }}        
              src={item.url}
              width={720}
              height={480}
              sizes="(max-width: 640px) 100vw,
                (max-width: 1280px) 50vw,
                (max-width: 1536px) 33vw,
                25vw"
            />
            </Link>
        ))
            }
            </LightGallery> 
        </div>
  )
}

export default GalleryGrid