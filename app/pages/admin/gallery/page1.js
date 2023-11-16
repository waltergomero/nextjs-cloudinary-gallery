import { revalidatePath } from 'next/cache';
import { v2 as cloudinary } from 'cloudinary';

import Container from '@/components/ui/container';
import CldImage from '@/components/ui/cldImage';
import Button from '@/components/ui/button';

import images from '@/data/images.json';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})


async function Home() {
  const { resources: sneakers } = await cloudinary.api.resources_by_tag('nextjs-server-actions-upload-sneakers', { context: true });

  async function create(formData) {
    'use server'
    const file = formData.get('image');
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream({
        tags: ['nextjs-server-actions-upload-sneakers']
      }, function (error, result) {
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
      })
      .end(buffer);
    });
    revalidatePath('/')
  }
  return (
    <Container>
      <h2 className="text-xl font-bold mb-4">Add a New Image</h2>
      <form action={create} className="bg-white border border-slate-200 dark:border-slate-500 rounded p-6 mb-6">
        <p className="mb-6">
          <label htmlFor="image" className="block font-semibold text-sm mb-2">
            Select an Image to Upload
          </label>
          <input
            id="image"
            className="block w-full border-slate-400 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="file"
            name="image"
            required
          />
        </p>
        <Button>Submit</Button>
      </form>
      <h2 className="text-xl font-bold mb-4">Images</h2>
      <ul className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {sneakers.map((sneaker) => {
          return (
            <li key={sneaker.public_id} className="rounded overflow-hidden bg-white dark:bg-slate-700">
              <div className="relative">
                <CldImage
                  width={800}
                  height={600}
                  src={sneaker.public_id}
                  alt={sneaker.context?.alt || ''}
                />
              </div>
              { sneaker.context?.caption && (
                <div className="py-4 px-5">
                  <p className="mb-1 text-md font-bold leading-tight text-neutral-800 dark:text-neutral-50">
                    { sneaker.context?.caption || '' }
                  </p>
                </div>
              )}
              
            </li>
          )
        })}
      </ul>

    </Container>
  )
}

export default Home;