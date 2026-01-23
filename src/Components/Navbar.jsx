import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Button from './Button'
import { IoLogoGithub } from "react-icons/io5";


const Navbar = () => {
  return (
    <div>
      <Container className="px-5 md:px-0">
        <Flex className='justify-between items-center mt-12 md:mt-2 md:mb-20 '>
          <div><h1 className='text-primary text-2xl font-bold'>JISAN</h1></div>
          <Flex className='gap-5 md:gap-7 items-center'>
            <Button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })}
            >Contact</Button>
            <a href="https://github.com/Yeasin-2005" target='_blank'>
              <div className='p-3 bg-[#16223c] rounded-[23px] cursor-pointer transition-transform duration-300 ease-out hover:scale-110'><IoLogoGithub className='text-primary text-4xl' /></div>
            </a>
          </Flex>
        </Flex>
      </Container>
    </div>
  )
}

export default Navbar
