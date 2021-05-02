import React, {useContext} from 'react'
import {CartContext} from '../App'

export default function CartPage() {
  const cart = useContext(CartContext)

  if (cart.cart.length === 0) return <h1>Aun no agregaste nada al carrito</h1>

  return (
    <ul>
      
      {cart.cart.map(item => {
        return <li key={item.id}>
          <span> producto: {item.title}</span>
          <span> total: {item.count}</span>
        </li>
      })}
      <button>Comprar</button>
    </ul>
  )
}
