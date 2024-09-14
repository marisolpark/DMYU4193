import {useState} from 'react' //this useState is a hook buildi into react. To use them we need to import them implicitly
// import React from 'react'
// React.useState --> this is another way in whcih useState can be used
import {ReactComponent as Heart} from '@material-design-icons/svg/filled/favorite.svg'
//this is the library we installed, we are importing the favorite.svg as a react component and re-naming it heart

export default function UserRating() {
    //The react state return 2 functions. The 1st is what we want to call our state, the 2nd one is how it we affect the state
    const [count, setCount] = useState(0) //we have to tell the what we want the count to start with. This cal also be null or undefined

    const handlePlusClick = () => { // this is the syntax that we will see for most functions in react
        if (count < 5) {
            setCount(count + 1)
        }
        return
    }
//You should NOT mutate states outside of a function

    const handleMinusClick = () => { // this is the syntax that we will see for most functions in react
        if (count > 0) {
            setCount(count - 1)
        }
        return
    }

    return (
        <div>
            <button onClick={handleMinusClick}>[-]</button> 
            <span>
                {[...Array(count)].map((heart, i) => {
                    return(
                        <span key="i">
                            <Heart/>
                        </span>
                    )
                })}
                <Heart/>
            </span>
            <button onClick={handlePlusClick}>[+]</button>
        </div>
    )
}