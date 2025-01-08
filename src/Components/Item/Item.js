import React, { useContext } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  
  return (
  <div>
    <div className='outer-box'>
    <div className='item'>
      <Link to={`/product/${props.data.id}`}>
      <div className='img-title'>
        <img onClick={window.scrollTo(0,0)} src={props.data.image} alt="" />
        <p className='title'>{props.data.name}</p>
        </div>
        </Link>
      <div className='price'>
          <p className='new_price'>{props.data.new_price}</p>
          <p className='old_price'>{props.data.old_price}</p>
        </div>
      </div>
  </div>
  </div>
  );
}

export default Item;
