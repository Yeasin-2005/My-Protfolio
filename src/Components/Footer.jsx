import React from 'react'
import Container from './Container'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-primary! py-10 mt-20'>
      <Container>
        <h2 className='text-center text-body font-bold text-2xl'>JISAN</h2>
            <div className='flex justify-center mt-10'>
                <ul className='flex gap-10 text-body text-lg mx-auto'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Contact</li>
            </ul>
            </div>
            <div className='flex justify-center mt-10'>
                <ul className='flex gap-10 text-body mx-auto text-4xl'>
                <li><FaFacebook className='cursor-pointer transition-transform duration-300 ease-out hover:scale-150'/></li>
                <li><FaInstagramSquare className='cursor-pointer transition-transform duration-300 ease-out hover:scale-150'/></li>
                <li><FaGithub className='cursor-pointer transition-transform duration-300 ease-out hover:scale-150'/></li>
                <li><FaLinkedin className='cursor-pointer transition-transform duration-300 ease-out hover:scale-150'/></li>
            </ul>
            </div>
      </Container>
    </footer>
  )
}

export default Footer
