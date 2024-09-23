import { Children } from "react"
import ReactDOM from 'react-dom'
import { useEffect } from "react"

export default function Modal(props) {
  const {onClose, children, actionBar} = props
  useEffect(()=>{
    document.body.classList.add('overflow-hidden')
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
