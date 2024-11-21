import React from 'react'
import './styles.css'

export default function Footer() {
    return (
        <>
            <p className='text-3xl font-mono pb-3 pt-6'>Thank you for following our recipes. Hope to see you back for more soon!!!</p>
            <div className='flex space-x-5 pb-10'>
                <button className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg px-2 py-2 text-white'>View harder dessert recipes</button>
                <button className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg px-2 py-2 text-white'>View dinner recipes</button>
            </div>
        </>
    )

} 