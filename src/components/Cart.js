import React from "react";
import CartList from "./CartList";
import Total from "./Total";
import Checkout from "./Checkout";
//change message, display items better, set subtotal and send it to total component
function Cart(props) {
  let itemCount = 0;
  let total = 0;

  return (
    <div className="row cart d-flex">
      <div className="col-sm-12 overflow-auto h-75">
        <h1>your cart:</h1>

        {props.cartItems.map((x) => {
          itemCount += 1;

          props.clear ? total : (total += x.price);

          return props.clear ? (
            ""
          ) : (
            <CartList price={x.price} title={x.title} />
          );
        })}
        <h5>{itemCount == 0 ? "is empty:(" : ""}</h5>
      </div>
      <div className="row total align-items-center text-center">
        <Total total={total} clear={props.clear} />

        <Checkout
          clearList={props.clearList}
          clear={props.clear}
          resetItems={props.resetItems}
        />
      </div>
    </div>
  );
}

export default Cart;
