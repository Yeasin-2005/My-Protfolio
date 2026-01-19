import React from 'react'
import SectionHead from './SectionHead'
import Container from './Container'
import AboutCard from './AboutCard'
import Img from './Img'
import Flex from "../Components/Flex"
import { AiFillAlipayCircle } from "react-icons/ai";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import Button from "../Components/Button"

const About = () => {
  return (
    <div id='aboutMe'>
      <Container>
        <SectionHead
          title="My Intro"
          head="About Me"
          className="mt-60 mb-20"
        />
        <Flex className='justify-between'>
          <Img />
          <div>
            <Flex className='gap-10 items-center'>
              <AboutCard
                icon={<AiFillAlipayCircle />}
                head="Experience"
                text="2 Years Working"
              />
              <AboutCard
                icon={<AiOutlineFundProjectionScreen />}
                head="Completed"
                text="45+ Projects"
              />
              <AboutCard
                icon={<BiSupport />}
                head="Support"
                text="Online 24/7"
              />
            </Flex>
            <p className='w-150 text-white py-4'>Frontend Developer passionate about building modern, responsive, and user-friendly interfaces with React and Tailwind CSS, focused on clean code and pixel-perfect UI.</p>
            <Button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth"
                })
              }}
            >Contact Me</Button>
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default About
