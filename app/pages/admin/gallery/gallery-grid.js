"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const GalleryGrid = ({images}) => {
  return (
    <main className="mx-auto max-w-[1960px] p-4 border-2 border-gray-200 rounded-md">
    <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-">
        
        {images && images?.map((item) =>(
                    <Link
                    key={item.id}
                    href={`/?photoId=${item.id}`}
                    shallow
                    className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
                  >
              <Image
              alt="Next.js Conf photo"
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
            </Link>
        ))
            }
        
        </div>
        </main>
  )
}

export default GalleryGrid
// "use client";

// import { ImageGrid } from "@/components/image-grid";
// import { CloudinaryImage } from "@/components/cloudinary-image";

// export default function GalleryGrid({ images }) {
//   return (
//     <ImageGrid
//       images={images}
//       getImage={(images) => {
//         return (
//           <CloudinaryImage
//             key={images.public_id}
//             imageData={images}
//             width="400"
//             height="300"
//             alt="an image of something"
//           />
//         );
//       }}
//     />
//   );
// }
