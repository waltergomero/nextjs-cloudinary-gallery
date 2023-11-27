import Bridge from '@/components/icons/bridge';
import Logo from '@/components/icons/logo';
import GalleryGrid from './gallery-grid';
import cloudinary from '@/lib/cloudinary'
import Link from 'next/link';


export default async function Home() {
  const results = (await cloudinary.v2.search
    //.expression(`resource_type:image${search ? ` AND tags=${search}` : ""}`)
    //.expression(`folder:${process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}/*`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) ;

  return (
<main className="mx-auto max-w-[1960px] p-4">
        <div className="gap-4 columns-1  sm:columns-2 xl:columns-3 2xl:columns-4">
          <div className="after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="flex max-h-full max-w-full items-center justify-center">
                <Bridge />
              </span>
              <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
            </div>
            <Logo />
            <h1 className="mt-8 mb-4 text-base font-bold uppercase tracking-widest">
              Photos gallery
            </h1>
            <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
              Awesome photos from events and places around the world.
            </p>
            <div className='flex gap-4'>
              <span className='pointer z-10 mt-6 text-sm font-semibold text-white'>View: </span>
            <Link className='pointer z-10 mt-6  text-sm font-semibold text-white' href="#">Collections</Link>
            <Link className='pointer z-10 mt-6  text-sm font-semibold text-white' href="#">Categories</Link>
            </div>
          </div>

        <GalleryGrid images={results.resources}/>
    
        </div>
      </main>
  )
}
