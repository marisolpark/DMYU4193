import {Routes, Route} from 'react-router-dom'
import ModalPage from './pages/ModalPage'
import ButtonPage from './pages/ButtonPage'
import AccordionPage from './pages/AccordionPage'
import NavBar from './components/NavBar'
import PriceBoxPage from './pages/PriceBoxPage'

export default function App() {
  return (
    <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
      <NavBar />
      <div className='col-span-5 relative'>
        <Routes>
          <Route path='/' element={<ButtonPage />}/>
          <Route path='accordion' element={<AccordionPage />}/>
          <Route path='modal' element={<ModalPage />}/>
          <Route path='pricebox' element={<PriceBoxPage />}/>
        </Routes>
      </div>
    </div>
  )
}
