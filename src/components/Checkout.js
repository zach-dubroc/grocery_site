import React from "react";

const Checkout = (props) => {
  const handleClick = () => {
    props.clearList((prev) => !prev);
    // console.log(clear);
  };

  const handleNewOrder = () => {
    props.resetItems((prev) => []);

    props.clearList((prev) => !prev);
  };

  return (
    <div className="col-sm-6">
      <input
        className={`${
          props.clear ? "collapse" : "visible"
        } btn btn-primary btn-sm`}
        type="button"
        value="checkout"
        onClick={handleClick}
      />

      <input
        className={`${
          !props.clear ? "collapse" : "visible"
        } btn btn-primary btn-sm`}
        type="button"
        value="new order?"
        onClick={handleNewOrder}
      />
    </div>
  );
};

export default Checkout;
