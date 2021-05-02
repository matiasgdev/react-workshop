import React, {useContext, useEffect, useState} from 'react'
import ItemDetail from '../components/ItemDetail'
import ItemCount from '../components/ItemCount'
import getSingleProduct from '../services/getSingleProduct'
import {useHistory} from 'react-router-dom'
import { CartContext } from '../App'

export default function ItemDetailContainer({id}) {
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState({
    title: '',
    description: ''
  })
  const [error, setError] = useState('')
  const [count, setCount] = useState(0)
  const [showCounter, setShowCounter] = useState(true)
  const cart = useContext(CartContext)
  const history = useHistory()

  function onAdd() {
    setShowCounter(false)
    cart.setCartItem({id, count: count, title: product.title })
    history.push('/cart')
  }


  useEffect(() => {
    getSingleProduct(id)
      .then(item => {
        setProduct({
          title: item.title,
          description: item.description
        })
        setLoading(false)
      })
      .catch(error => {
        setError(error)
        setLoading(false)
      })
  }, [])

  if (loading) return <h1>Cargando el producto...</h1>

  if (error) return <h1>{error}</h1>

  return <div>
    <ItemDetail title={product.title} description={product.description} count={count}/>
    <ItemCount onAdd={setCount} count={count} showCounter={showCounter} />
    {count > 0 && <button onClick={onAdd}>Finalizar mi compra</button>}
  </div>
  
}
