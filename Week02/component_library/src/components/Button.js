// for this project we are also using this library: https://tailwindcss.com/docs/guides/create-react-app --> to look up the styling choices you can do command+k */
// for this project we are using the npm prop-types library: https://www.npmjs.com/package/prop-types?activeTab=readme
// import PropTypes from 'prop-types'
import cx from 'classnames'
import { twMerge } from 'tailwind-merge'

export default function Button(props) {
    // we are adding all of these like booleans
    const {
        children, 
        primary, // we want to throw a warning if you try to choose 2 of the same colors at the same time
        secondary, 
        success, 
        warning, 
        danger, 
        outline, 
        rounded,
        ...otherProps
    } = props

    const classes = twMerge(cx(otherProps.className, 'flex items-center px-8 py-3 border', {
        'border-blue-500 bg-blue-500 text-white': primary, // the key is the classname
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-orange-500 bg-orange-500 text-white': warning,
        'border-red-600 bg-red-600 text-white': danger,
        //rounded
        'rounded-full': rounded,
        //outline
        'bg-white': outline,
        //outline variation text color
        'text-blue-500': outline && primary, //this is saying that the text will be blue only of the outline and primary are true
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-orange-500': outline && warning,
        'text-red-600': outline && danger
    }))

    return <button {...otherProps} className={classes}>{children}</button>


    Button.propTypes = {
        // children: PropTypes.node,     This will make sure we are not using out component wrong.
        // primary: PropTypes.bool,      It is commented out bc they are not needed but it will
        // secondary: PropTypes.bool,    probably need to be there for work
        // success: PropTypes.bool,
        // warning: PropTypes.bool, 
        // danger: PropTypes.bool, 
        // outline: PropTypes.bool, 
        // rounded: PropTypes.bool, 

        // this is making sure we only have 1 of the color options at a time
        checkVariationValue: ({primary, secondary, success, warning, danger}) => {
            const count = 
            // the !! makes the var come as a number
            Number(!!primary) +
            Number(!!secondary) +
            Number(!!success) +
            Number(!!warning) +
            Number(!!danger)

            if (count > 1){
                return new Error(
                    'Only one color can be selected at a time'
                )
            }
        }
    }
}