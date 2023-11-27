'use client'
import React from 'react';
import Image from 'next/image';

import { DeleteImage } from '@/components/ui/button/button';


const GalleryGrid = ({images}) => {
  return (
    <main className="mx-auto max-w-[1960px] p-4 border-2 border-gray-200 rounded-md">
    <div className="gap-4 columns-1 sm:columns-2 md:columns-3 lg:columns-3 xl:columns-4 2xl:columns-5">

        {images && images?.map((item) =>(
          <div className='relative after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight' key={item.public_id}>
              <Image       
              alt={""}
              className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
              style={{ transform: 'translate3d(0, 0, 0)' }}             
              src={item.url}
              width={720}
              height={480}
              sizes="(max-width: 640px) 100vw,
                (max-width: 1280px) 50vw,
                (max-width: 1536px) 33vw,
                25vw"
            />
            <DeleteImage public_id={item.public_id} />
           </div>
        ))
            }
      
        </div>
        </main>
  )
}

export default GalleryGrid
