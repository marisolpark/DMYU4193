import React from 'react'
import './styles.css'
// Hmmm. This looks like a reusable UI component...
// Lets discuss next class
export default function Card(props) {
  return <div className="card">{props.children}</div>
  //we could destructure this bu putting
  // const {children} = props
  //return <div className="card">{children}</div>
}
