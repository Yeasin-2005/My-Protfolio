import React from 'react'
import Button from './Button'
import { MdPlayArrow } from "react-icons/md";

const ProjectCard = ({ ImgSrc, ProjectName }) => {
    return (
        <div>
            <div className='bg-secondary p-5 rounded-2xl w-82 '>
                <img src={ImgSrc} alt="" className='h-45 w-70 mx-auto rounded-2xl' />
                <h2 className='text-white text-2xl font-semibold pt-3 pb-5'>{ProjectName}</h2>
                <Button>Preview<MdPlayArrow /></Button>
            </div>
        </div>
    )
}

export default ProjectCard
