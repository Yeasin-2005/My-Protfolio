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
            <li onClick={()=>{
                document.getElementById("nav")?.scrollIntoView({
                  behavior:"smooth"
                })
              }}>Home</li>
            <li onClick={()=>{
                document.getElementById("aboutMe")?.scrollIntoView({
                  behavior:"smooth"
                })
              }}>About</li>
            <li onClick={()=>{
                document.getElementById("skills")?.scrollIntoView({
                  behavior:"smooth"
                })
              }}>Skills</li>
            <li onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })}>Contact</li>
          </ul>
        </div>
        <div className='flex justify-center mt-10'>
          <ul className='flex gap-10 text-body mx-auto text-4xl'>
            <a href="https://www.facebook.com/jisanx4x" target="_blank">
            <li><FaFacebook className='cursor-pointer transition-transform duration-300 ease-out hover:scale-150' /></li>
            </a>
            <a href="" target="_blank">
            <li><FaInstagramSquare className='cursor-pointer transition-transform duration-300 ease-out hover:scale-150' /></li>
            </a>
            <a href="https://github.com/Yeasin-2005" target="_blank">
            <li><FaGithub className='cursor-pointer transition-transform duration-300 ease-out hover:scale-150' /></li>
            </a>
            <a href="" target="_blank">
            <li><FaLinkedin className='cursor-pointer transition-transform duration-300 ease-out hover:scale-150' /></li>
            </a>
          </ul>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
