import { useState } from "react";
//import { generateSignature } from "@/utils/generateSignature";
import {signature} from '@/app/actions/cloudinarySignature';


export function ImageUpload() {
  const [isImagUploaded, setIsImageUploaded] = useState(false);

  async function handleWidgetClick() {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        uploadSignature: signature,
        resourceType: "image",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Uploaded", result.info);
          setIsImageUploaded(true);
        } else if (error) {
          console.log(error);
        }
      }
    );
    widget.open();
  }

  return (
    <div>
      <button type="button" onClick={handleWidgetClick}>
        Upload Image Signed
      </button>
      {isImagUploaded ? (
        <>
          <div>Successfully uploaded</div>
        </>
      ) : null}
    </div>
  );
}