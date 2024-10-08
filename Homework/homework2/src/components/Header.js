import React from 'react'
import {ReactComponent as Heart} from '@material-design-icons/svg/filled/favorite.svg'
import './styles.css'

export default function Header() {
    return (
        <>
            <h1 className='list_title text-cyan-600 text-6xl pt-6'>Dessert recipe book</h1>
            <div className='flex'>
                <p className='text-3xl font-mono'>Make some desserts with this amazing and easy-to-follow recipes!</p>
                <Heart className='size-10 fill-red-500'/>
            </div>
        </>
    )

} 
