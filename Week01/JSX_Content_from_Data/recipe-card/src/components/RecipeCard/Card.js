import './styles.css'
export default function Card(props) {
    return <div className='card'>{props.children}</div>
}

// export default function Card(children) {
//     return <div>{children}</div>
// } you could also do it like this
