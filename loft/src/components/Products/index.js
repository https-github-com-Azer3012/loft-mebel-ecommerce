import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAllProducts } from '../../redux/actions'
import Product from './Product'
import './products.scss'


function Products() {

    const allProducts=useSelector(state=>state.allProducts)

    const dispatch=useDispatch()


    
    useEffect(()=>{
        axios.get("https://loftmebel-ec909-default-rtdb.firebaseio.com/Products.json")
        .then(res=>{
           let arr= Object.keys(res.data).map(key=>res.data[key])

            dispatch(setAllProducts(arr))
        })

    },[])

    
   
    return (
        <div className="products">
            {allProducts && allProducts.map(product=>(
                <Product key={product.id} product={product}/>
            ))}
            
        </div>
    )
}

export default Products
