import React from 'react'
import './CartItems.css'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ProductContext'

const CartItems = () => {
    const { all_product, cartItems, removeFromCart,getTotalCartAmount } = useContext(ShopContext);

    return (
    <div className='cartitems'>
    <div className="cartitems-format-main">
    <p>Products</p>
    <p>Title</p>
    <p>Price</p>
    <p>Quantity</p>
    <p>Total</p>
    <p>Remove</p>
    </div>
    <hr />
    <div>
     {all_product.map((e) => {
            if (cartItems[e.id] > 0) {
            return (
            <div key={e.id}>
                <div className='cartitems-format'>
                    <img src={e.image} alt={e.name} className='carticon-product-icon' />
                    <p>{e.name}</p>
                    <p>{e.new_price}</p>
                    <p className='quantity-box' >{cartItems[e.id]}</p>
                    <p>{(e.new_price * cartItems[e.id])}</p>
                    <img
                        src='/Assets/cart_cross_icon.png'
                        alt=""
                        className='cartitems-remove-icon'
                        onClick={() => removeFromCart(e.id)}
                    />
                </div>
                <hr />
            </div>
            );
        }
        return null;
        })}

        <div className='cartitems-down'>
            <div className='cartitems-total'>
                <h1>Cart Totals</h1>
                <div>
                    <div className='cartitems-total-item'>
                        <p>Subtotal</p>
                        <p>{getTotalCartAmount().toFixed(2)}</p>
                    </div>
                    <hr/>
                    <div className='cartitems-total-item'>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className='cartitems-total-item'>
                        <h3>Total</h3>
                        <h3>{getTotalCartAmount().toFixed(2)}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className='cartitems-promocode'>
            <p>If you have a promo code, Enter it here</p>
            <div className='cartitems-promobox'>
                <input type="text" placeholder="promo code"/>
                <button>SUBMIT</button>
            </div>
        </div>
        </div>
        </div>
        
        </div>
    )
}

export default CartItems
