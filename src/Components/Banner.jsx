import React from 'react'
import Container from './Container'
import Flex from './Flex'
// import jisan from "../assets/jisan.jpg"
import black from "../assets/black.png"
import About from './About'
import Button from './Button'


const Banner = () => {
  return (
    <>
      <Container>
        <Flex className='justify-between items-center'>
          <div className='timeline-view animate-blurred-fade-in animate-range-[entry_10%_contain_30%]'>
            <h2 className='text-2xl text-white font-bold'>Hi, I’m <span className='text-5xl font-bold text-primary'> Jisan.</span></h2>
            <h3 className='  w-150 text-white'><span className='block text-2xl font-medium mb-5'>Frontend Developer.</span> Crafting Clean, Super Fast, Scalable & Performance-Driven Web Interfaces.</h3>
            <Flex className='gap-7 mt-10'>
              <Button className=" text-primary! bg-body! border-2 border-primary hover:bg-primary! hover:text-body! transition-all duration-300 ease-in-out">Download CV</Button>
              <Button>About</Button>
            </Flex>
          </div>
          <div><img src={black} alt="" className='rounded-4xl h-100 w-80 animate__animated animate__fadeInRightBig' style={{ animationDuration: "2.5s" }} /></div>
        </Flex>

      </Container>
    </>
  )
}

export default Banner
