// import {Link} from 'react-router-dom'
// the difference between Link and NavLink is the active tag
import { NavLink } from "react-router-dom"
import cx from 'classnames'

// IMPORTANT: Links to prop needs the '/path'
const NavBar = () => {
    let isActive //ASK - how does it know what the value is? DO we not need to tell it?
    const classes  = cx('text-blue-500', {'font-bold decoration-solid': isActive})
    return (
        <nav className="sticky  top-0 overflow-y-scroll flex flex-col items-start">
            {/* Link takes a 'to' prop where you give it the rout it is supposed to follow */}
            <NavLink to='/'>Buttons</NavLink>
            <NavLink to='/accordion'>Accordion</NavLink>
            <NavLink to='/modal'>Modal</NavLink>
            <NavLink to='/dropdown'>Dropdown</NavLink>
        </nav>
    )
}


// without active class
// const NavBar = () => {
//     return (
//         <nav className="sticky  top-0 overflow-y-scroll flex flex-col items-start">
//             {/* Link takes a 'to' prop where you give it the rout it is supposed to follow */}
//             {/* // IMPORTANT: Links to prop needs the '/path' */}
//             <Link to='/' className='text-blue-500'>Buttons</Link>
//             <Link to='/accordion' className='text-blue-500'>Accordion</Link>
//             <Link to='/modal' className='text-blue-500'>Modal</Link>
//         </nav>
//     )
// }

export default NavBar