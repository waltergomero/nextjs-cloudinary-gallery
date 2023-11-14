import React from 'react'
import CloudinaryImages from './cloudinary-images' 

const ImageGrid = ({images}) => {
  const MAX_COLUMNS = 4;

  function getColumns(colIndex) {
    return images.filter((_, index) => index % MAX_COLUMNS === colIndex);
  }

  return (
    <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map((column, index) => (
            <div key={index} className='flex flex-col gap-4'>     
                {column.map((image) => (
                    <CloudinaryImages key={image.public_id} publicId={image.public_id} />
        ))}
        </div>
        ))}
    </div>
  )
}

export default ImageGrid