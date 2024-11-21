// import { FaAngry } from 'react-icons/fa'
import ButtonPage from './pages/ButtonPage'
// import Button from './components/Button'

export default function App() {
    return <ButtonPage/>
    // return (
    //     /* you could have a className here but this would defet the purpose of having a component. 
    //         The component should have the styling so that the style stays consistent */
    //     /* for this project we are using booleans for the primary/secondary and outline/no 
    //     outline styling variants. This do not need to be markes as true or false. If they excist, 
    //     they are true and if they do not exist, they are undefined */
    //     <>
    //         <div>
    //             <Button primary rounded onClick={()=>console.log("click")} className="mb-8">Click me!</Button>
    //         </div>
    //         <div>
    //             <Button secondary><FaAngry/>Click me!</Button>
    //         </div>
    //         <div>
    //             <Button success rounded>Click me!</Button>
    //         </div>
    //         <div>
    //             <Button warning outline>Click me!</Button>
    //         </div>
    //         <div>
    //             <Button danger rounded outline>Click me!</Button>
    //         </div>
    //     </>
    // )
}