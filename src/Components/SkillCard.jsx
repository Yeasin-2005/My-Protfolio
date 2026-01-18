import React from 'react'
import Flex from './Flex'

const SkillCard = ({ head,icon1,icon2,icon3,icon4,icon5,icon6,skill1,skill2,skill3,skill4,skill5,skill6 }) => {
    return (
        <div className='h-100 w-130 bg-secondary text-center rounded-4xl'>
            <h1 className='text-primary text-3xl py-15 font-medium'>{head}</h1>
            <Flex className='px-15 gap-x-25 '>
               <ul className='flex flex-col gap-y-10'>
                 <Flex className='items-center gap-3 '>
                    <div className='text-primary text-3xl'>
                        {icon1}
                    </div>
                    <h2 className='text-white text-2xl font-bold'>{skill1}</h2>
                </Flex>
                <Flex className='items-center gap-3 '>
                    <div className='text-primary text-3xl'>
                        {icon2}
                    </div>
                    <h2 className='text-white text-2xl font-bold'>{skill2}</h2>
                </Flex>
                <Flex className='items-center gap-3 '>
                    <div className='text-primary text-3xl'>
                        {icon3}
                    </div>
                    <h2 className='text-white text-2xl font-bold'>{skill3}</h2>
                </Flex>
               </ul>
               <ul className='flex flex-col gap-y-10'>
                 <Flex className='items-center gap-3 '>
                    <div className='text-primary text-3xl'>
                        {icon4}
                    </div>
                    <h2 className='text-white text-2xl font-bold'>{skill4}</h2>
                </Flex>
                <Flex className='items-center gap-3 '>
                    <div className='text-primary text-3xl'>
                        {icon5}
                    </div>
                    <h2 className='text-white text-2xl font-bold'>{skill5}</h2>
                </Flex>
                <Flex className='items-center gap-3 '>
                    <div className='text-primary text-3xl'>
                        {icon6}
                    </div>
                    <h2 className='text-white text-2xl font-bold'>{skill6}</h2>
                </Flex>
               </ul>
                <div>
                </div>
            </Flex>
        </div>
    )
}

export default SkillCard
