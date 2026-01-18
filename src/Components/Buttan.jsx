import React from 'react'

const Button = ({ children, className = '' }) => {
    return (
        <button
            className={`${className} bg-gray-700 py-2 px-4 border-2 border-black text-white rounded-xl`}>
            {children}
        </button>
    )
}

export default Button