import React from 'react'
import Container from './Container'
import Flex from './Flex'
// import jisan from "../assets/jisan.jpg"
import black from "../assets/black.png"
import About from './About'
import Button from './Button'
import 'animate.css';


const Banner = () => {
  return (
    <>
      <Container className="px-5 md:px-0">
        <Flex className='flex-col md:flex-row md:justify-between items-center mt-10 md:mt-20 relative'>
          <div className='text-center md:text-start'>
            <h2 className='text-2xl text-white font-bold'>Hi, I’m <span className='text-5xl font-bold text-primary'> Jisan.</span></h2>
            <h3 className=' md:w-150 text-white'><span className='block text-2xl font-medium mb-5'>Frontend Developer.</span> Crafting Clean, Super Fast, Scalable & Performance-Driven Web Interfaces.</h3>
            <Flex className='md:gap-7 md:mt-10 md:justify-start gap-4 absolute left-25 md:relative -bottom-25 md:left-0 md:bottom-0'>
              <Button className=" text-primary! bg-body! border-2 border-primary hover:bg-primary! hover:text-body! transition-all duration-300 ease-in-out">Download CV</Button>
              <Button
              onClick={()=>{
                document.getElementById("aboutMe")?.scrollIntoView({
                  behavior:"smooth"
                })
              }}
              >About Me</Button>
            </Flex>
          </div>
              <div><img src={black} alt="" className='rounded-4xl w-52 h-68 lg:h-100 lg:w-80 mt-10 md:mt-0'/></div>
        </Flex>

      </Container>
    </>
  )
}

export default Banner
