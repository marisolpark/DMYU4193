import { useState } from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'

// the reason that the use state is in the page instead of the modal components is that the button and the modal 
//are 'siblings' and they bith needa to get information so it makes sense for that information to live in the 'parent' 
// which in this case is the modal page

export default function ModalPal() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const handleClick = () => {
        setIsModalOpen(true)
    }

    const handleClose = () => {
        setIsModalOpen(false)
    }

    return (
        <div>
            {/* The button is the sibling of the modal */}
            <Button primary outline className='m-4' onClick={handleClick}>Open modal</Button>
            {/* the {} are for java script. This is saying if isModalOpen == true then modal will print out. 
            If it is false it will not print out*/}
            <Button danger outline className='m-4' onClick={handleClose}>Close modal</Button>
            {isModalOpen && <Modal onClose={handleClose}/>}
        </div>
    )
}