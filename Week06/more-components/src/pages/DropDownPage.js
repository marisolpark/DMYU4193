import { useState } from 'react'
import Dropdown from '../components/Dropdown'

// use this later to filter --> data to filter
const DATA_TO_FILTER = [ //this is what the user sees
    {id: 1, name: 'katie', team: 'red'},
    {id: 2, name: 'Tony', team: 'green'},
    {id: 3, name: 'Amy', team: 'blue'},
    {id: 4, name: 'Andy', team: 'red'},
    {id: 5, name: 'Billy', team: 'green'},
    {id: 6, name: 'Pete', team: 'blue'}
]

//this will be our select option dropdown data
const OPTIONS = [
    {label: 'Red', value: 'red'},
    {label: 'Green', value: 'green'},
    {label: 'Blue', value: 'blue'},
]


const DropdownPage = () => {
    const [value, setValue] = useState(null)

// hard coded Array.filter example- Array.filter returns a NEW array with only the items that tested true
// const filteredOptions = DATA_TO_FILTER.filter(// the filter function works on arrays and takes in an arrow function
//     (student)=>student.team === 'red')
// console.log(filteredOptions)

let filteredData = DATA_TO_FILTER
if (value?.value) {
    filteredData = DATA_TO_FILTER.filter(
        (student) => student.team === value.value
    )
}
   
    const handleChange = (option) => {
        setValue(option)
    }

    const colorMap = {
        red: 'bg-red-500', 
        green: 'bg-green-400',
        blue: 'bg-blue-500'
    }

    return (
        <div>
            <h1 className='text-xl'>{value?.label}</h1>
            <Dropdown options={OPTIONS} value={value} onChange={handleChange} /> 
            {/* here I am binding the value to the component here */}

            <h2 className={ colorMap[value?.value]}>Students from {value?.label} team</h2>
            {filteredData.map((student)=>(<p key={student.id}>{student.name}</p>))}
        </div>
    )
}

export default DropdownPage