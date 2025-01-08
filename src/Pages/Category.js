import React, { useContext, useState } from 'react';
import Item from '../Components/Item/Item';
import './Category.css';
import { ShopContext } from '../Context/ProductContext';

const Category = (props) => {
  const { all_product } = useContext(ShopContext);
  const [sortOrder, setSortOrder] = useState('default');

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const filtered_products = all_product.filter(prod => prod.category === props.category);
  
  const sorted_products = [...filtered_products].sort((a, b) => {
    if (sortOrder === 'priceAsc') {
      return a.new_price - b.new_price;
    } else if (sortOrder === 'priceDesc') {
      return b.new_price - a.new_price;
    }
    return 0;
  });

  const products = sorted_products.map(prod => <Item key={prod.id} data={prod} />);

  return (
    <div className='page'>
      <div className='banner'>
        <img src={`/Assets/banner_${props.category}.png`} alt="" />
      </div>
      
      <div className='sort-container'>
        <label htmlFor="sort">Sort By: </label>
        <select id="sort" value={sortOrder} onChange={handleSortChange}>
          <option value="default">Default</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
        </select>
      </div>

      <div className='all-products'>
        {products}
      </div>
    </div>
  );
};

export default Category;
