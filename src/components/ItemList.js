import React from 'react'
import Item from './Item'

export default function ItemList({items}) {
  return (
    <>
      <h1>Catálogo:</h1>
      <ul>
        {items.map(i => {
          return <Item key={i.id} id={i.id} title={i.title} description={i.description}/>
        })}
      </ul>
    </>
  )
}
