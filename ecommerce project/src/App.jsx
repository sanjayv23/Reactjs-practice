
import './App.css'
import { HomePage } from './Pages/HomePage'
import { CheckoutPage } from './Pages/CheckoutPage'
import { TrackingPage } from './Pages/TrackingPage'
import { OrdersPage } from './Pages/OrdersPage'

import {Routes,Route} from 'react-router';
function App() {
  
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/checkout' element={<CheckoutPage/>}/>
      <Route path="/tracking" element={<TrackingPage/>}/>
      <Route path="/orders" element={<OrdersPage/>}/>
    </Routes>
  )
}

export default App
