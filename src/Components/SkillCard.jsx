import React from 'react'
import Flex from './Flex'

const SkillCard = ({ head,icon1,icon2,icon3,icon4,icon5,icon6,skill1,skill2,skill3,skill4,skill5,skill6 }) => {
    return (
        <div className='w-82 md:h-100 md:w-130 bg-secondary text-center rounded-4xl timeline-view animate-blurred-fade-in animate-range-[entry_10%_contain_30%]'>
            <h1 className='text-primary text-2xl md:text-3xl py-7 md:py-15 font-medium'>{head}</h1>
            <Flex className='justify-between md:px-15 px-5'>
               <ul className='flex flex-col gap-y-5 md:gap-y-10 pb-5'>
                 <Flex className='items-center gap-3 '>
                    <div className='text-primary text-2xl md:text-3xl'>
                        {icon1}
                    </div>
                    <h2 className='text-white text-xl md:text-2xl font-bold'>{skill1}</h2>
                </Flex>
                <Flex className='items-center gap-3 '>
                    <div className='text-primary md:text-3xl'>
                        {icon2}
                    </div>
                    <h2 className='text-white text-xl md:text-2xl font-bold'>{skill2}</h2>
                </Flex>
                <Flex className='items-center gap-3 '>
                    <div className='text-primary md:text-3xl'>
                        {icon3}
                    </div>
                    <h2 className='text-white text-xl md:text-2xl font-bold'>{skill3}</h2>
                </Flex>
               </ul>
               <ul className='flex flex-col gap-y-5 md:gap-y-10 pb-5'>
                 <Flex className='items-center gap-3 '>
                    <div className='text-primary text-3xl'>
                        {icon4}
                    </div>
                    <h2 className='text-white text-xl md:text-2xl font-bold'>{skill4}</h2>
                </Flex>
                <Flex className='items-center gap-3 '>
                    <div className='text-primary text-3xl'>
                        {icon5}
                    </div>
                    <h2 className='text-white text-xl md:text-2xl font-bold'>{skill5}</h2>
                </Flex>
                <Flex className='items-center gap-3 '>
                    <div className='text-primary text-3xl'>
                        {icon6}
                    </div>
                    <h2 className='text-white text-xl md:text-2xl font-bold'>{skill6}</h2>
                </Flex>
               </ul>
            </Flex>
        </div>
    )
}

export default SkillCard
