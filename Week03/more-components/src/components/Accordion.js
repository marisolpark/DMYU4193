import { useState} from "react"
import { GoChevronDown, GoChevronLeft } from "react-icons/go"

export default function Accordion(props) {
    const [expandedIndex, setExpandedIndex] = useState(-1)

    const {items} = props
    const renderItems = items.map((item, index) =>{
        const isExpanded = index === expandedIndex
        const icon = <span className="text-2xl">
            {/* out first ternary! 
            1-condition that we are checking to be true
            2- what to return is 1 is true
            3-what to render else, aka if 1 is false */}
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </span>
        const handleClick = (nextIndex) => {
            // setExpandedIndex(nextIndex) // this are the 2 options that we have.
            setExpandedIndex((currectExpandedIndex) => { //we get current expanded index and next index for free
                //handle the mechanisim of: if the item is already open, close it
                //else open it
                if (currectExpandedIndex === nextIndex) {
                    return -1
                } else {
                    return nextIndex
                }

            })

        }
        return (
            <div key={item.id}>
                {/* we are not calling handleClick directly here bc it would not actually call it. It would be 
                like pointing out that it excists and not calling it */}
                <div  onClick={ () => handleClick(index)} className="flex justify-between p-3 bg-gray-100 border-b items-center 
                cursor-pointer">
                    {item.label} {icon}
                </div>
                {/* if the content index matches the expanded index in  state, render it, otherwise render nothing */}
                { isExpanded && <div className="border p-5">{item.content}</div>} {/* The last truthy value will be returned with && */}
            </div>
        )
    }) 
    return <div>{renderItems}</div>
}