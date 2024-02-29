import React from "react";
//add subtotal
function Total(props) {
  //change to be subtotal and total
  //total = total * .07
  let msg = "";
  let sub = "";
  props.clear
    ? (msg = "ty for shopping!")
    : (msg = "total + tax : " + props.total.toFixed(2) + "$");

  props.clear
    ? (sub = "")
    : (sub = "sub-total : " + props.subTotal.toFixed(2) + "$");

  return (
    <div className="col-sm-6">
      <h6>{sub}</h6>
      <h5>{msg}</h5>
    </div>
  );
}

export default Total;
