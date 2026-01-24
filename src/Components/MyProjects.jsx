import React from 'react'
import SectionHead from './SectionHead'
import Flex from './Flex'
import ProjectCard from './ProjectCard'
import Container from './Container'
import project1 from "../assets/project1.jpg"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"

export default function MyProjects() {
    return (
        <Container>
            <SectionHead
                head="Recent Project"
                title="My Projects"
                className="mb-20"
            />
            <Flex className='flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-y-4 '>
                <a href="https://e-commerce-website-silk-kappa.vercel.app/" target="_blank">
                <ProjectCard
                    ImgSrc={project1}
                    ProjectName="E-Commerce Website"
                    className=""
                />
                </a>
                <ProjectCard
                    ImgSrc={project2}
                    ProjectName="Company,s website"
                />
                <ProjectCard
                    ImgSrc={project3}
                    ProjectName="Charity Website"
                />
            </Flex>
        </Container>
    )
}
