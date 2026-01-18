import React from 'react'
import Container from './Container'
import SectionHead from './SectionHead'
import Flex from './Flex'
import AboutCard from './AboutCard'
import ProjectCard from './ProjectCard'

const Services = () => {
    return (
        <>
            <Container>
                <SectionHead
                    title="What I offer"
                    head="My Services"
                    className="mt-30 mb-20"
                />
                <Flex className='justify-between'>
                    <AboutCard
                        head="Clean & Maintainable Code"
                        text="Reusable components"
                        className="w-82! py-18!"
                    />
                    <AboutCard
                        head="Responsive Web Design"
                        text="Mobile-first approach"
                        className="w-82! py-18!"
                    />
                    <AboutCard
                        head="Time Management"
                        text="Responsive Web Design"
                        className="w-82! py-18!"
                    />
                </Flex>
            </Container>
        </>
    )
}

export default Services
