import {Routes, Route} from 'react-router-dom'
// import ButtonPage from './pages/ButtonPage'
// import AccordionPage from './pages/AccordionPage'
import ModalPage from './pages/ModalPage'
import ButtonPage from './pages/ButtonPage'
import AccordionPage from './pages/AccordionPage'
import DropdownPage from './pages/DropDownPage'
import NavBar from './components/NavBar'

// IMPORTANT:path here do not need the '/'
export default function App() {
  return (
    <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
      <NavBar />
      <div className='col-span-5 relative'>
        <Routes>
          {/* the path is like the URL */}
          {/* the element is the components or page you want to render when you go throught this route */}
          <Route path='/' element={<ButtonPage />}/>
          <Route path='accordion' element={<AccordionPage />}/>
          <Route path='modal' element={<ModalPage />}/>
          <Route path='dropdown' element={<DropdownPage />}/>
        </Routes>
      </div>
    </div>
  )
}
