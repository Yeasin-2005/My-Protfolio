import React from 'react'
import Container from './Container'

const SectionHead = ({title,head,className}) => {
  return (
    <Container>
        <div className={`${className} text-center `}>
            <h2 className='text-lg text-secondary '>{title}</h2>
            <h3 className='text-primary text-3xl font-bold'>{head}</h3>
        </div>
    </Container>
  )
}

export default SectionHead
