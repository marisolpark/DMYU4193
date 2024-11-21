import {useState} from 'react'
import {GoChevronDown, GoChevronLeft} from 'react-icons/go'

export default function Accordion(props) {
  const [expandedIndex, setExpandedIndex] = useState(-1)

  const {items} = props
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    )

    const handleClick = (nextIndex) => {
      setExpandedIndex((currentExpandedIndex) => {
        if (currentExpandedIndex === nextIndex) {
          return -1
        } else {
          return nextIndex
        }
      })
    }
    return (
      <div key={item.id}>
        <div
          onClick={() => handleClick(index)}
          className="flex justify-between p-3 bg-gray-100 border-b items-center cursor-pointer"
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    )
  })

  return <div>{renderedItems}</div>
}
