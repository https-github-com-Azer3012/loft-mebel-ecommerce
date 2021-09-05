import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BsFillTrashFill } from 'react-icons/bs'
import './styles.scss'
import { useState } from 'react'
import { useEffect } from 'react'
import { removeFromBasket } from '../../redux/actions'

function Basket() {

    const basket=useSelector(state=>state.basket)
    const dispatch=useDispatch()

    const [total,setTotal]=useState(0)

    useEffect(()=>{

        let totalPrice=0
        if(basket){
            basket.forEach(item=>{
                totalPrice+=parseInt(item.price)
            })
        }

        setTotal(totalPrice)
    },[])

    return (
        <div className="basket">
            {basket.length===0?(
                <p className="empty">Sizin səbətiniz boşdur</p>
            ):(
                <div className="basket-section">
                    <p className="basket-title">Sizin Səbətiniz</p>
                    <ul className="basket-products">
                        {basket.map(product=>(
                            <li key={product.id}>
                                <img src={product.image} alt={product.image}/>
                                <p className="name">{product.name}</p>
                                <p className="price">{product.price}</p>
                                <button onClick={()=>dispatch(removeFromBasket(product.id))}>
                                    <BsFillTrashFill/>
                                </button>
                            </li>
                        ))}
                    <div className="order-section">
                        <p className="total-price">Umumi mebleg</p>
                        <span>{total} &#8380;</span>
                        <button>Sifaris Verin</button>
                    </div>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Basket
