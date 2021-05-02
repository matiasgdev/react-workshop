import React from 'react'
import {useParams} from 'react-router-dom'
import ItemDetailContainer from '../containers/ItemDetailContainer'

export default function ProductDetailPage() {
  const params = useParams()
  const id = params.id

  return (
    <ItemDetailContainer id={id}/>
  )
}
