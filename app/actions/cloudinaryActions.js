import {v2 as cloudinary} from "cloudinary";

const cloudinaryConfig = cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
})

export async function getSignature () {
 const timestamp = Math.round((new Date()).getTime() / 1000);

 const signature = cloudinary.utils.api_sign_request({
    timestamp: timestamp,
    eager: 'w_400,h_300,c_pad|w_260,h_200,c_crop',
    eager_async: true,
    type: 'upload',
    invalidate: true,
     }, cloudinaryConfig.api_secret)
     return {timestamp, signature}

}
