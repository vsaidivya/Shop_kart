import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ProductContext'
import Item from '../Item/Item'

const Related = () => {
    // Getting products from context
    const { all_product: productsArray } = useContext(ShopContext);
  
    // Function to shuffle and select random products
    const getRandomProducts = (arr, num) => {
      const shuffled = [...arr].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, num);
    };
  
    // Select 4 random products from productsArray
    const selectedProducts = getRandomProducts(productsArray, 4);
  
    // Mapping selected products to Item components
    const products = selectedProducts.map(prod => {
      return <Item key={prod.id} data={prod} />;
    });
  
  return (
    <div className='collections'>
        <h2 className='heading'>RELATED PRODUCTS</h2>
    <div className='all-products'>
      {products}
    </div>
    </div>
  )
}

export default Related
