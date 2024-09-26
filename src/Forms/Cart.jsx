import React, { useState } from 'react'

const Cart = () => {

  const [cartCount,setCartCound]=useState(0)
  const handleClick =()=> setCartCound(cartCount+1)

  return (
    <>
      <h1>Number of item in the cart : {cartCount}</h1>
      <button onClick={handleClick}>{cartCount} add to cart</button>
    </>
  );
}

export default Cart
