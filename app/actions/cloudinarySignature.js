'use server'

import {v2 as cloudinary} from 'cloudinary'


const cloudinaryConfig = cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
})

export async function getSignature(){
    const timestamp = Math.round(new Date().getTime()/1000);
    const signature = await cloudinary.utils.api_sign_secret(
        {
            timestamp, folder:'gallery'
        },
        cloudinaryConfig.api_secret
    )
    const data = {timestamp, signature}
    
    return (data);
}