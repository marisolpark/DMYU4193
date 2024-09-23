// import {useState} from 'react'
import Button from './Button'

export default function PriceBox(props) {
    const {items} = props

    const renderedItems = items.map((item, index) => {
        return (
            <div key={index} className="bg-gray-800 text-white rounded-lg m-2 w-80">
                <div className="flex justify-center text-2xl bg-sky-600 rounded-t-lg p-3">
                    <div>{item.label}</div>
                </div>
                <div className='flex flex-col p-4 space-y-6 place-items-center'>
                    <div className='text-5xl'>${item.price}/mo</div>
                    <div className='text-center'>
                        <div>{item.unsers}</div>
                        <div>{item.gb}</div>
                        <div>{item.email}</div>
                        <div>{item.help}</div>
                    </div>
                    <div>
                        <Button primary outline>{item.buttontext}</Button>
                    </div>
                </div>
            </div>
        )
      })


    return (
        <div className='flex flex-wrap'>{renderedItems}</div>
    )
}