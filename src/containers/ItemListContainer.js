import React, {useEffect, useState} from 'react'
import getProducts from '../services/getProducts'
import ItemList from '../components/ItemList'

export default function ItemListContainer() {
  const [items, setItems] = useState([])

  useEffect(() => {
    getProducts()
      .then(data => {
        setItems(data)
      })
  }, [])

  return (
    <ItemList items={items}/>
  )
}
