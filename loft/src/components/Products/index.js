import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from './Product'
import './products.scss'


function Products() {

    const [products,setProducts]=useState()
    useEffect(()=>{
        axios.get("https://loftmebel-ec909-default-rtdb.firebaseio.com/Products.json")
        .then(res=>setProducts(Object.keys(res.data).map(key=>res.data[key])))
    },[])

    
    console.log(products);
    return (
        <div className="products">
            {products && products.map(product=>(
                <Product key={product.id} product={product}/>
            ))}
            
        </div>
    )
}

export default Products
