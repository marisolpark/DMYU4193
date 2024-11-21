import { NavLink } from "react-router-dom"
import cx from 'classnames'

const NavBar = () => {
    let isActive
    const classes  = cx('text-blue-500', {'font-bold decoration-solid': isActive})
    return (
        <nav className="sticky  top-0 overflow-y-scroll flex flex-col items-start">
            <NavLink to='/'>Buttons</NavLink>
            <NavLink to='/accordion'>Accordion</NavLink>
            <NavLink to='/modal'>Modal</NavLink>
            <NavLink to='/pricebox'>Price Box</NavLink>
        </nav>
    )
}


export default NavBar