import React from "react";
//displays price and title from items clicked on in grocery menu
const CartList = ({ price, title }) => {
  return (
    <div className="d-flex border-bottom border-dark justify-content-between align-items-baseline p-2">
      <div className="text-start">
        <h4>{title}</h4>
      </div>
      <div className="text-end">
        <h6>{price.toFixed(2)}$</h6>
      </div>
    </div>
  );
};
export default CartList;
