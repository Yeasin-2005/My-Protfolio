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
            <Flex className='justify-between'>
                <a href="https://e-commerce-website-silk-kappa.vercel.app/" target="_blank">
                <ProjectCard
                    ImgSrc={project1}
                    ProjectName="E-Commerce Website"
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
