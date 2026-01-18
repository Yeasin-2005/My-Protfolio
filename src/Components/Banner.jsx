import React from 'react'
import Container from './Container'
import Flex from './Flex'
// import jisan from "../assets/jisan.jpg"
import black from "../assets/black.png"
import DecryptedText from "../Components/DecryptedText"


const Banner = () => {
  return (
    <>
      <Container>
        <Flex className='justify-between '>
            <div>
                <h2 className='text-2xl font-bold'>Hi, I’m <span className='text-5xl font-bold'> Jisan.</span></h2>
                <h3 className='text-2xl font-medium mt-5 w-150'>Frontend Developer, Crafting Clean, Super Fast, Scalable & Performance-Driven Web Interfaces.</h3>
            </div>
            <h1>wjerghrfwjeshbfgrvjsbnfxcdvsw</h1>
            <div><img src={black} alt="" className='rounded-4xl h-100 w-80 '/></div>
        </Flex>
  {/* Example 1: Defaults (hover to decrypt) */}
<DecryptedText text="Hover me!" />

{/* Example 2: Customized speed and characters */}
<DecryptedText
text="Customize me"
speed={400}
maxIterations={20}
characters="ABCD1234!?"
className="revealed"
parentClassName="all-letters"
encryptedClassName="encrypted"
/>

{/* Example 3: Animate on view (runs once) */}
<div style={{ marginTop: '4rem' }}>
<DecryptedText
speed={700}
  text="This text animates when in view"
  animateOn="view"
  revealDirection="center"
/>
</div>
      </Container>
    </>
  )
}

export default Banner
