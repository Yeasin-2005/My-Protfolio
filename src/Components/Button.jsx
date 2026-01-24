import React from 'react'

const Button = ({ children, className,onClick}) => {
    return (
        <button
        onClick={onClick}
            className={`${className} py-2 md:py-3.5 px-2 md:px-5 bg-primary text-body rounded-xl text-sm md:text-xl md:font-medium cursor-pointer flex items-center gap-4`}>
            {children}
        </button>
    )
}

export default Button