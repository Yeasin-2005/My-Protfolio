import React from 'react'
import { MdOutlineSupportAgent } from "react-icons/md";


const AboutCard = ({icon,head,text,className}) => {
  return (
    <div className={`${className} bg-secondary py-5 text-center w-50 rounded-2xl cursor-pointer timeline-view animate-blurred-fade-in animate-range-[entry_10%_contain_30%]`}>
        <div className='flex justify-center text-primary text-3xl'>
        {icon}
        </div>
        <h2 className='text-white text-2xl font-bold'>{head}</h2>
        <h2 className='text-[#b0baca] text-sm pt-2'>{text}</h2>
      
    </div>
  )
}

export default AboutCard
