import React from "react";
//comment
const Checkout = (props) => {
  const handleClick = () => {
    props.clearList((prev) => !prev);
    props.resetItems((prev) => []);
    console.log(props.clear);
  };

  const handleNewOrder = () => {
    props.clearList((prev) => !prev);
    props.resetItems((prev) => []);
    console.log(props.clear);
  };

  return (
    <div className="col-sm-6">
      <input
        className={`${props.clear ? "collapse" : "visible"} btn-dark btn`}
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
