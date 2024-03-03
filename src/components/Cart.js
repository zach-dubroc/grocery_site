import React from "react";
import CartList from "./CartList";
import Total from "./Total";
import Checkout from "./Checkout";

function Cart(props) {
  //vars for updating totals and count
  let itemCount = 0;
  let total = 0;

  return (
    <div className="row cart d-flex">
      <div className="col-sm-12 cartlist overflow-auto h-75 text-center p-0">
        <h1>your cart:</h1>
        {/* map cart items pulled from click event in grocery menu */}
        {props.cartItems.map((x) => {
          itemCount += 1;
          //resets total on checkout
          props.clear ? total : (total += x.price);
          //resets cart list on checkout
          return props.clear ? (
            ""
          ) : (
            <CartList key={x.title} price={x.price} title={x.title} />
          );
        })}
        {/* cart empty msg */}
        <h5>{itemCount == 0 ? "contains nothing :(" : ""}</h5>
      </div>

      <div className="row total align-items-center text-start flex-nowrap">
        {/* pass props to total component */}
        <Total
          subTotal={total}
          total={total + total * 0.07}
          clear={props.clear}
        />
        {/* pass props to checkout component(clear/reset function) */}
        <Checkout
          clearList={props.clearList}
          clear={props.clear}
          resetItems={props.resetItems}
          total={total}
          count={itemCount}
        />
      </div>
    </div>
  );
}

export default Cart;
