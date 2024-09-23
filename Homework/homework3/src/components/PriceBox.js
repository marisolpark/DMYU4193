// import {useState} from 'react'
import Button from './Button'

export default function PriceBox(props) {
    const {items} = props

    const renderedItems = items.map((item, index) => {
        return (
            <div key={index} className="bg-gray-800 text-white rounded-lg m-5">
                <div className="flex justify-center text-3xl bg-sky-600 rounded-t-lg p-3">
                    <div>{item.label}</div>
                </div>
                <div className='flex flex-col p-4 space-y-5 place-items-center'>
                    <div>${item.price}/mo</div>
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
        <div className='flex'>{renderedItems}</div>
    )
}