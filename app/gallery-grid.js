"use client";

import React from 'react';
import Image from 'next/image';

const GalleryGrid = ({images}) => {
  return (
        <div>
        {images && images?.map((item) =>(
            <Image
                alt={item.public_id}
                src={item.url}
                width={720}
                height={480}
              />
        ))
            }
        </div>
  )
}

export default GalleryGrid