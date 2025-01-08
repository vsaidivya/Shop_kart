import React from 'react'
import new_collections from '../../Data/new_collections'
import Item from '../Item/Item'
import './NewCollections.css'

const NewCollections = () => {
    const products = new_collections.map(prod => {return <Item key={prod.id} data={prod}/>})
  return (
    <div className='collections'>
        <h2 className='heading'>NEW COLLECTIONS</h2>
    <div className='all-products'>
      {products}
    </div>
    </div>
  )
}

export default NewCollections
