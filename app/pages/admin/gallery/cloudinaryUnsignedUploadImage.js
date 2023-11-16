"use client";
import React from 'react';
import { CldUploadButton } from 'next-cloudinary';
import { useRouter } from "next/navigation";

const CloudinaryUnsignedUploadImage = () => {
  const router = useRouter();
  return (
    <div>
        <CldUploadButton
            options={{multiple:true}}
            onUpload={(result) => {
              setTimeout(() => {
                router.refresh();
              }, 2000);
            }}
            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
            className='text-black bg-orange-600 hover:bg-blue-800
                          focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5
                          text-center mr-5'
            >
          <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
          Upload
        </div>
        </CldUploadButton>
    </div>
  )
}

export default CloudinaryUnsignedUploadImage