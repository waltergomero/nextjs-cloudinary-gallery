import { v2 as cloudinary } from "cloudinary";

export default async function handler(req, res) {
 const timestamp = Math.round((new Date).getTime()/1000);
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  console.log("api secret: ", apiSecret)
  try {
    const signature = cloudinary.utils.api_sign_request(
      timestamp,
      apiSecret
    );

   const _signature = JSON.stringify({signature})
    console.log("_signature: ", _signature)
    res.status(200).json({ _signature, });
  } catch (error) {
    console.log(error);
    //res.send(error);
  }
}