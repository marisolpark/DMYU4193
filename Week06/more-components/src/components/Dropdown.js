import cx from "classnames"
import { useState } from "react"
import {GoChevronDown} from 'react-icons/go'

const Dropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const {options, value, onChange} = props

    const handleClick = () => {
        setIsOpen(!isOpen)
        // usually you want to use a functional update which clooks like :
        // setIsOpen((currentIsOpen) => !currentIsOpen) // this is technically how you should do it
    }

    const handleOptionClick = (option) => { //the option will give us an id and a value
        setIsOpen(false) //this will close the dropdown
        onChange(option)
    }

    const renderedOptions = options.map((option)=>{
        return (
            <div onClick={()=> handleOptionClick(option)} 
            classNames='hover:bg-sky-100 rounded cursor-pointer p-1' 
            key={option.value}>
                {option.label}
            </div>
        )
    })

    // this is super clear
    // let content = 'Select...'
    // if (value) {
    //     content = value.label
    // }
    // ther shortened version
    const content = value ? value.label : 'Select...'

    return (
        <div className="w-48 relative">
            <Panel onClick={handleClick} className="flex justify-between item-center cursor-pointer">
                {content}
                <GoChevronDown />
            </Panel>
            
            {/* && returns last truthy value or first falsy value */}
            {isOpen && 
            <Panel className="absolute top-full border" >{renderedOptions}</Panel>}
        </div>
    )
  }

const Panel = ({children, className, ...otherProps}) => {
    return <div {...otherProps} className={cx(className, "border rounded p-3 shadow bg-white w-full")} >{children}</div>
}
  
export {Panel}
export default Dropdown