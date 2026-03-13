import axios from 'axios';
import { Header } from './../../Components/Header';
import './homePage.css';
import { useEffect, useState } from 'react';
import { ProductsGrid } from './ProductsGrid';
export function HomePage({cart}) {
    const [products,setproducts]=useState([]);
    
    useEffect(()=>{
        axios.get('/api/products')
        .then((res)=>{
            setproducts(res.data);
        })

        
    },[]) 
    
    return (
    <>      
        <title>Ecommerce Project</title>

        <Header cart={cart}/>

        <div className="home-page">
            <ProductsGrid products={products}/>
        </div>
    </>
  )
}