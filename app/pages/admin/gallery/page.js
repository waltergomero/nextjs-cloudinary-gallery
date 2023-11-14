"use client";

import React, { useState } from 'react'
import Modal from '@/components/ui/model'
import UploadPage from './upload';
import CloudinaryButton from './cloudinary';
import { ImageUpload } from './imageUpload';
import ImageGrid from './image-grid';
import {v2 as cloudinary} from 'cloudinary'


 const GalleryPage = () => {


  const [showModal, setShowModal] = useState(false);

  return (
    <section>
      <button className='text-white bg-blue-700 hover:bg-blue-800
      focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5
      text-center mr-5' onClick={() => setShowModal(true)}> Add Image</button>

      <Modal isVisible={showModal} onClose={() => setShowModal(false)} >
        <UploadPage/>
      </Modal>

      <CloudinaryButton/>
      <ImageUpload/>
      
    </section>
  )
}
export default GalleryPage;
