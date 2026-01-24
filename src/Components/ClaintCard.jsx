import React from 'react'

const ClaintCard = ({para,claintname,ImgSrc}) => {
  return (
    <div className='w-82 md:w-130 bg-secondary py-5 px-5 rounded-2xl text-white'>
      <img src={ImgSrc} alt="" className='h-15 w-15 rounded-full'/>
      <h2 className='text-2xl font-semibold pt-4 pb-2'>{claintname}</h2>
      <p>{para}</p>
    </div>
  )
}

export default ClaintCard
