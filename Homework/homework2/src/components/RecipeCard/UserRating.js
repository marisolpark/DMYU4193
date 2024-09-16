import {useState} from 'react' 
import {ReactComponent as Heart} from '@material-design-icons/svg/filled/favorite.svg'
import '../styles.css'

export default function UserRating() {
    const [count, setCount] = useState(0)
    const [viewPlus, setViewPlus] = useState(true)
    const [viewMinus, setViewMinus] = useState(true)

    const handlePlusClick = () => {
        if (count < 4) {
            setCount(count + 1)
            console.log("+1")
        }

        //if the rating is at the max hearts the button "+" button will dissapear
        // if (count == 3 && viewPlus == true) {
        //     console.log("plus hide")
        //     setViewPlus(false);
        // }
        //if the rating is above the min hearts the button "-" button will appear
        // if (count < 0 && viewMinus == false) {
        //     setViewMinus(true)
        //     console.log("minus show")
        // }
        // return
    }

    const handleMinusClick = () => {
        if (count > 0) {
            setCount(count - 1)
            console.log("-1")
        }

        // if the rating is below the max hearts the button "+" button will appear
        // if (count < 5 && viewPlus == false) {
        //     setViewPlus(true);
        //     console.log("plus show")
        // }

        //if the rating is at the min hearts the button "-" button will dissapear
        // if (count == 1 && viewMinus == true) {
        //     console.log("minus hide")
        //     setViewMinus(false)
        // }

        return
    }

    return (
        <div>
            <h3 className='list_title'>Want to rate the recipe?</h3>
            <div className='rating_heart_layout'>
                {count > 0 /*&& viewMinus == true*/ ? (<button onClick={handleMinusClick}>[-]</button> ) : (<p> {/* hide minus*/} </p>)}
                <span className='rating_heart_layout'>
                    {[...Array(count)].map((heart, i) => {
                        return(
                            <span key="i">
                                <Heart/>
                            </span>
                        )
                    })}
                    <Heart/>
                </span>
                {count < 4 /*viewPlus == true*/ ? (<button onClick={handlePlusClick}>[+]</button>) : (<p>{/* hide plus*/} </p>)}
            </div>
        </div>
    )
}
