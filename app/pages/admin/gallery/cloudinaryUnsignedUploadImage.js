"use client";
import React from 'react';
import { CldUploadButton } from 'next-cloudinary';

const CloudinaryUnsignedUploadImage = () => {
  return (
    <div>
        <CldUploadButton
            options={{multiple:true}}
            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
            className='text-white bg-blue-700 hover:bg-blue-800
      focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5
      text-center mr-5'
            >
            <span>
                Add Images
            </span>
        </CldUploadButton>
    </div>
  )
}

export default CloudinaryUnsignedUploadImage