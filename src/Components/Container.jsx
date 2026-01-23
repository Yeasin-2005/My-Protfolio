import React, { Children } from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`container px-5 md:px-0 ${className}`}>
      {children}
    </div>
  )
}

export default Container
