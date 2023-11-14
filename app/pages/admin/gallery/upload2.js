
import { useState} from 'react';
import Compressor from "compressorjs";
import React, { useRef } from "react"; 

const UploadPage2 = () => {
  // Ref object to reference the input element 
  const inputFile = useRef(null); 
  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = e => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  };
  const handlerAddImage = async (e) => {
    e.preventDefault();

    if (compressedFile != null) {
       const formdata = new FormData();
       formdata.append('file', compressedFile);
       formdata.append("upload_preset", "gallery")
      
       const data = await fetch('https://api.cloudinary.com/v1_1/wgomero-dev/image/upload', {
                    method: 'POST',
                    body: formdata
             }).then(r => r.json());
      console.log("Cloudinary data: ", data);

    await fetch("/api/admin/gallery/new", {method: "POST", body: JSON.stringify({ imageInformation, url: data.url, image_name: data.public_id, height: data.height, width: data.width}),})
    .then((response) => response.json())
    .then(data => {
      console.log("data: ", data)
      if(data.error){
        alertService.error(data.error);
        }
      else{
        router.push("/pages/admin/gallery")
      }
      })
    .catch(error => alertService.error(error.message))
    };
  }

  const removeSelectedImage = () => {
    if (inputFile.current) { 
      inputFile.current.value = ""; 
      inputFile.current.type = "text"; 
      inputFile.current.type = "file"; 
  } 
  setCompressedFile(null)
    };


  return (
    <section>
      <form onSubmit={handlerAddImage}>
      <div>
      <label htmlFor="upload-button">
        {image.preview ? (
          <img src={image.preview} alt="dummy" width="300" height="300" />
        ) : (
          <>
            <span className="fa-stack fa-2x mt-3 mb-2">
              <i className="fas fa-circle fa-stack-2x" />
              <i className="fas fa-store fa-stack-1x fa-inverse" />
            </span>
            <h5 className="text-center">Upload your photo</h5>
          </>
        )}
      </label>
      <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleChange}
      />

      </div>
      <div>
        {image && (
        <>
            <div className="flex justify-center mt-2 p-2 rounded-lg border border-gray-200">
                <img
                    className="h-96 rounded-lg"
                    src={URL.createObjectURL(image)}
                    alt="uploaded Images"
                  />
            </div>
            <div className='flex justify-center mt-1'>
                <button
                    onClick={removeSelectedImage}
                    className=" justify-center px-4 py-1.5 text-white text-xs rounded-md bg-red-500"
                  >
                    Remove this image
                </button>
            </div>
        </>
        
        )}
      </div>
      <div className='flex items-center justify-center mt-2 gap-2'>

       <button className='px-5 py-1.5 text-sm bg-blue-600 rounded-lg text-white justify-right'
       type="submit">Save Image</button>
      </div>
    
    </form>
    </section>
  )
}

export default UploadPage2