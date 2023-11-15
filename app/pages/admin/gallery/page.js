"use client";

import CloudinaryUnsignedUploadImage from './cloudinaryUnsignedUploadImage';

 const GalleryPage = () => {

  return (
    <section>

      <CloudinaryUnsignedUploadImage/>
      
    </section>
  )
}
export default GalleryPage;

// <button className='text-white bg-blue-700 hover:bg-blue-800
// focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5
// text-center mr-5' onClick={() => setShowModal(true)}> Add Image</button> 

// <Modal isVisible={showModal} onClose={() => setShowModal(false)} >
//   <UploadPage/>
// </Modal>