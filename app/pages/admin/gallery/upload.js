import Link from "next/link";
import React, { useState } from "react";
import { HiCloudUpload } from 'react-icons/hi';

const UploadPage = () => {

    const [image, setImage] = useState({ preview: "", raw: "" });

    const handleChange = e => {
      if (e.target.files.length) {
        setImage({
          preview: URL.createObjectURL(e.target.files[0]),
          raw: e.target.files[0]
        });
      }
    };

    const handleUpload = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image.raw);
    
        await fetch("YOUR_URL", {
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data"
          },
          body: formData
        });
      };

    return(
      <>
        <div className="mt-5 grid justify-items-center bg-gray-200 rounded-lg">
        <label htmlFor="upload-button">
          {image.preview ? (
            <img src={image.preview} alt="Image Preview" className="h-96 rounded-lg mt-2 mb-2" />
          ) : (
            <div className="cursor-pointer grid justify-items-center ">

                <HiCloudUpload size={48}/>
                <h5 className="text-center">Browse your photo</h5>

            </div>
          )}
        </label>
        <input
          type="file"
          id="upload-button"
          style={{ display: "none" }}
          onChange={handleChange}
        />
      </div>
      <div className="grid justify-items-center mt-2">
          <button onClick={handleUpload}>Upload</button>
      </div>
      </>
    );
}

export default UploadPage