import React from 'react'

const Button = ({ children, className,onClick}) => {
    return (
        <button
        onClick={onClick}
            className={`${className} py-3.5 px-5 bg-primary text-body rounded-xl text-xl font-medium cursor-pointer flex items-center gap-4`}>
            {children}
        </button>
    )
}

export default Button