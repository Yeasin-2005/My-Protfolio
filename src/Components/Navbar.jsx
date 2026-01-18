import React from 'react'
import 'animate.css';
import Container from './Container';
import Buttan from './Buttan';
import Flex from './Flex';


const Navbar = () => {
  return (
    <>
      <Container>
        <nav className='py-4 bg-blue-600 rounded-2xl mt-5 mb-10 animate__animated animate__backInDown'>
          <Flex className="justify-center items-center">
            <ul>
              <Flex className='gap-14'>
                <li>Home</li>
                <li>About me</li>
                <li>Project</li>
                <li>Contact</li>
                <li>GitHub</li>
              </Flex>
            </ul>
            <div>
            </div>
          </Flex>
        </nav>
      </Container>
    </>
  )
}
export default Navbar
