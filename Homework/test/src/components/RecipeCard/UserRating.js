import {useState} from 'react' 
import {ReactComponent as Heart} from '@material-design-icons/svg/filled/favorite.svg'
import StarIcon from '../StarIcon'
// import {ReactComponent as Star} from '@material-design-icons/svg/filled/star.svg'
import '../styles.css'
import Button from '../Button'

export default function UserRating() {
    const [count, setCount] = useState(0)
    const [viewPlus, setViewPlus] = useState(true)
    const [viewMinus, setViewMinus] = useState(true)

    const handlePlusClick = () => {
        if (count < 5) {
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
            {count}
            <h3 className='list_title'>Want to rate the recipe?</h3>
            <div className='rating_heart_layout'>
                {/* {count > 0 && viewMinus == true ? (<button onClick={handleMinusClick}>[-]</button> ) : (<p> hide minus </p>)} */}
                {count > 0 ? (<Button visible onClick={handleMinusClick}>-</Button>) : (<Button invisible>-</Button>)}
                <span className='rating_heart_layout'>
                    {[...Array(count)].map((star, i) => {
                        return(
                            <span key="i">
                                <StarIcon visible />
                            </span>
                        )
                    })}
                    {[...Array(5-count)].map((star, i) => {
                        return(
                            <span key="i">
                                <StarIcon invisible />
                            </span>
                        )
                    })}
                    
                </span>
                {count < 5 ? (<Button visible onClick={handlePlusClick}>+</Button>) : (<Button invisible>+</Button>)}
                {/* {count < 4 && viewPlus == true ? (<button onClick={handlePlusClick}>[+]</button>) : (<p>hide plus</p>)} */}
            </div>
        </div>
    )
}
