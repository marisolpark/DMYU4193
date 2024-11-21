import { Children } from "react"
import ReactDOM from 'react-dom'
import { useEffect } from "react"

export default function Modal(props) {
  const {onClose, children, actionBar} = props
  // React creates and distry things. It does not hide and show
  /* useEffect(()=>{}, []) --> this is an empty useEffect
  This is the useEffect hook from react
  useEffect fires every time the components is monuted (aka created in the DOM).
  The first argument is an arrow function that we want to fire.
  The second argument is an array of pieces of state we want to watch for a change. 
  When they change useEffect arrow function fires.
  If you only wanted to fire when its created, the second argument is an empty array []  */
  useEffect(()=>{
    // disable scrolling when the modal is open on mount/creation
    document.body.classList.add('overflow-hidden')
    /*useEffect can also take a callback function:
    if you return a function here it will fire when the components is distroyed or updated (aka close button in this case)*/
    return () => {document.body.classList.remove('overflow-hidden')}
  }, [])

  return ReactDOM.createPortal(
  <>
  {/* overlay */}
    <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-50"></div>

    {/* modal BG */}
    <div className="absolute inset-40 p-10 bg-white">
      {/* modal content */}
      <div className="absolute flex-col justify-between h-full">
        {/* children text */}
        <div>{children}</div>
    {/* action bar */}
        <div className="flex justify-end">{actionBar}</div>
        </div>
    </div>
  </>, document.getElementById('portal')
  )
}
