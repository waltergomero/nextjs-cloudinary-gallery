const CloudinaryImages = (props) => {
    return (
      <div className='relative'>
        <CldImage
          key={props.key}
          width="960"
          height="600"
          src={props.publicId}
          sizes="100vw"
          alt="Description of my image"
        />
        <div className='absolute top-2 right-2 w-6 h-6 text-red-700'>
      </div>
    </div>
    )
  }
  
  export default CloudinaryImages