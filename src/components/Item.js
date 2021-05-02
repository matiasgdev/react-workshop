import React from 'react'
import {Link} from 'react-router-dom'
import ItemCount from './ItemCount'

export default function Item({id, title}) {
  return (
    <li>
      <Link to={`/catalogo/${id}`}>
        {title}
      </Link>
    </li>
  )
}
