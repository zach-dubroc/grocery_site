import React from "react";
//sets clear list bool and clears cart
const Checkout = (props) => {
  const handleClick = () => {
    props.clearList((prev) => !prev);
    props.resetItems((prev) => []);
  };
  //resets clear list bool and cart list in case user clicked items without reseting order
  const handleNewOrder = () => {
    props.clearList((prev) => !prev);
    props.resetItems((prev) => []);
  };

  return (
    <div className="col-sm-6">
      <input
        className={`${
          props.clear || props.total === 0 ? "collapse" : "visible"
        } btn-dark btn`}
        type="button"
        value="checkout"
        onClick={handleClick}
      />

      <input
        className={`${!props.clear ? "collapse" : "visible"} btn-dark btn`}
        type="button"
        value="new order"
        onClick={handleNewOrder}
      />
    </div>
  );
};

export default Checkout;
