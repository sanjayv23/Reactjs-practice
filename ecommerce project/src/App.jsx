
import './App.css'
import { HomePage } from './Pages/HomePage'
import { CheckoutPage } from './Pages/CheckoutPage'
import { TrackingPage } from './Pages/TrackingPage'
import { OrdersPage } from './Pages/OrdersPage'
import { useState,useEffect } from 'react'
import axios from 'axios'
import {Routes,Route} from 'react-router';
function App() {
  const [cart,setcart]=useState([]);
  useEffect(()=>{
    axios.get('/api/cart-items?expand=product')
        .then((res)=>{
            setcart(res.data);
        })
  },[])
  return (
    <Routes>
      <Route path='/' element={<HomePage cart={cart}/>}/>
      <Route path='/checkout' element={<CheckoutPage cart={cart}/>}/>
      <Route path="/tracking" element={<TrackingPage/>}/>
      <Route path="/orders" element={<OrdersPage/>}/>
    </Routes>
  )
}

export default App
