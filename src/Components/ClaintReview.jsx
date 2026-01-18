import React from 'react'
import Container from './Container'
import SectionHead from './SectionHead'
import Flex from './Flex'
import ClaintCard from './ClaintCard'
import man1 from "../assets/man1.png"
import man2 from "../assets/man2.png"

const ClaintReview = () => {
  return (
    <div>
      <Container>
        <SectionHead
        title="Comment"
        head="Claint's Review"
        className="mt-30 mb-20"
        />
        <Flex className='justify-between'>
            <ClaintCard
            ImgSrc={man1}
            claintname="Albart F"
            para="A really good job, all aspects of the project were done well. Very creative and thoughtful. I was very impressed and would recommend this to anyone"
            />
            <ClaintCard
            ImgSrc={man2}
            claintname="Morshed Khan"
            para="A really good job, all aspects of the project were done well. Very creative and thoughtful. I was very impressed and would recommend this to anyone"
            />
        </Flex>
      </Container>
    </div>
  )
}

export default ClaintReview
