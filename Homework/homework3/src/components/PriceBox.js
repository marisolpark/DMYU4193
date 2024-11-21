import Button from './Button'

export default function PriceBox(props) {
    const {items} = props

    const renderedItems = items.map((item, index) => {

        return (
            <div key={item.id} className="bg-gray-800 text-white m-2 w-80 rounded-lg">
                <div className="flex justify-center bg-sky-600 p-3 text-2xl rounded-t-lg">
                    <div>{item.label}</div>
                </div>
                <div className='flex flex-col space-y-6 place-items-center p-4'>
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