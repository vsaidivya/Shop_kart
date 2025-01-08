import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ProductContext';
import Productdetails from './Productdetails';
import Related from './Related';

const Productpage = () => {
  
  const {productId} = useParams();

const { all_product: productsArray } = useContext(ShopContext);
const currproduct = productsArray.find((e) => e.id === Number(productId));

  console.log(currproduct)

  return (
    <div>
      <Productdetails currproduct={currproduct}/>
      <Related/>
    </div>
  );
};

export default Productpage;

