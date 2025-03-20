import React from 'react'
import image1 from "../../../assets/gallery/image1.png"
import image2 from "../../../assets/gallery/image2.png"

const Gallery = () => {
  return (
    <div className='md:w-[80%] mx-auto my-28'>
      <div className='mb-16'>
        <h1 className='text-5xl font-bold text-center'>Our Gallery</h1>
      </div>
      <div>
        <div>
          <img src={image1} alt="" />
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Gallery