"use client";
import React from 'react';
import { CldUploadButton } from 'next-cloudinary';

const CloudinaryButton = () => {
  return (
    <div>
        <CldUploadButton
            options={{multiple:true}}
            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
            >
            <span>
                Upload
            </span>
        </CldUploadButton>
    </div>
  )
}

export default CloudinaryButton