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
    <div id="aboutMe" className="">
      <Container>
        <SectionHead
          title="My Intro"
          head="About Me"
          className="mt-50 mb-10 md:mt-60 md:mb-20"
        />
        <Flex className='flex-col md:flex-row  md:justify-between  '>
          <div className='mx-auto'>
          <Img />
          </div>
          <div>
            <Flex className='justify-center md:justify-between gap-y-3 mt-5 md:mt-0 flex-wrap md:gap-10 items-center'>
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
            <p className='md:w-150 text-white py-4 text-center'>Frontend Developer passionate about building modern, responsive, and user-friendly interfaces with React and Tailwind CSS, focused on clean code and pixel-perfect UI.</p>
            <Button
            className="mx-auto"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth"
                })
              }}
            >Hire Me</Button>
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default About
