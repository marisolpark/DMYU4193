// in this project we are also using a icon library: https://www.npmjs.com/package/react-icons
import { FaAngry } from 'react-icons/fa'
import Button from '../components/Button'

export default function ButtonPage(props){

    // 100 || 200 --> returns the 1st truthy value so it will return 100
    // 100 && 200 --> returns either the last truthy value or the last falsy value so this returns 200
    // null && 200
    const valueForCondition = false

    return(
        <div>
            {/* the valueForCondition is in Javascript */}
            {valueForCondition && <Button danger/>} {/* this is a way of saying if the stuff in the stuff in the left is true render this, otherwise render nothing */}
            {valueForCondition || <Button success/>}
            <div>
                <Button primary rounded onClick={()=>console.log("click")} className="mb-8">Click me!</Button>
            </div>
            <div>
                <Button secondary><FaAngry/>Click me!</Button>
            </div>
            <div>
                <Button success rounded>Click me!</Button>
            </div>
            <div>
                <Button warning outline>Click me!</Button>
            </div>
            <div>
                <Button danger rounded outline>Click me!</Button>
            </div>
        </div>
    )
}