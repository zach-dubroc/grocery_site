import React from "react";

const CartList = ({ price, title }) => {
  return (
    <div>
      <p>
        item: {title}
        <br />
        {price.toFixed(2)}$
      </p>
    </div>
  );
};
export default CartList;
