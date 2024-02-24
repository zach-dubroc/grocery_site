import React from "react";
import CartList from "./CartList";

function Cart(props) {
  let total = 0;
  return (
    <div className="row">
      <div className="col-sm-12">
        <h1>I am cart </h1>
        {props.cartItems.map((x) => {
          return <CartList price={x.price} title={x.title} />;
        })}
      </div>

      <div className="col-sm-4 text-start">
        <p>total:</p>
      </div>
      <div className="col-sm-8">
        {props.cartItems.map((x) => {
          total += x.price;
        })}
        <p>{total.toFixed(2)}$</p>
      </div>
    </div>
  );
}

export default Cart;
