import React, { createContext } from "react";
import all_product from "../Data/all_product";

export const ShopContext = createContext(null);

const getDefaultCart=()=>{
  let cart={};
  for(let i=0;i<all_product.length+1;i++){
    cart[i]=0;
  }
  return cart;
}

const ShopContextProvider = (props) => {
  const [cartItems,setcartItems]=React.useState(getDefaultCart());
  console.log(cartItems);

  const addToCart = (itemId) =>{
    setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    console.log(cartItems)
  }

  const removeFromCart = (itemId) =>{
    setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }
  
  const getTotalCartAmount =() => {
    let total=0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        let iteminfo = all_product.find((product)=>product.id===Number(item))
      total += iteminfo.new_price * cartItems[item];
      }
    }
    return total;
  }

  const getTotalItems =() => {
    let total=0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        total += cartItems[item];
      }
    }
    return total;
  }
  
  const contextValue = { all_product,cartItems,addToCart,removeFromCart,getTotalCartAmount,getTotalItems };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;

