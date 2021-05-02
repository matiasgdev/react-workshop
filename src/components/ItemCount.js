import React from 'react'

export default function ItemCount({onAdd, showCounter, count}) {
  if (!showCounter) return null
  return (
    <div>
      <button onClick={() => onAdd(count + 1)}>+</button>
      <button>-</button>
    </div>
  )
}
