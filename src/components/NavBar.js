import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <Link to="/" style={{paddingRight: '8px'}}>
        home 
      </Link>
      <Link to="/catalogo">
        catálogo
      </Link>
    </div>
  )
}
