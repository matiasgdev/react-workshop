import React from 'react'

export default function ItemDetail({title, description, count}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>seleccionados: {count}</p>
    </div>
  )
}
