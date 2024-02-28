import React from "react";
//comment
const Checkout = (props) => {
  const handleClick = () => {
    props.clearList((prev) => !prev);
    props.resetItems((prev) => []);
  };

  const handleNewOrder = () => {
    props.clearList((prev) => !prev);
    props.resetItems((prev) => []);
  };

  return (
    <div className="col-sm-6">
      <input
        className={`${
          props.clear ? "collapse" : "visible"
        } btn-dark btn p-2 m-1 px-1`}
        type="button"
        value="checkout"
        onClick={handleClick}
      />

      <input
        className={`${
          !props.clear ? "collapse" : "visible"
        } btn-dark btn p-2 m-1 px-1`}
        type="button"
        value="keep shopping"
        onClick={handleNewOrder}
      />
    </div>
  );
};

export default Checkout;
