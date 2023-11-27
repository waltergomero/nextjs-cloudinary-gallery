'use server'
import { revalidatePath } from 'next/cache'

import cloudinary from '@/lib/cloudinary'

export async function deleteImage(public_id) {
    await cloudinary.v2.uploader.destroy(public_id, function(error,result) {
        console.log(result, error) })
        .then(resp => {
            revalidatePath('/pages/admin/gallery')
        })
        .catch(_err=> console.log("Something went wrong, please try again later."));

  }