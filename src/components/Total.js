import React from "react";
//add subtotal
function Total(props) {
  //change to be subtotal and total
  //total = total * .07
  let msg = "";
  props.clear
    ? (msg = "ty for shopping!")
    : "total" + (msg = props.total.toFixed(2) + "$");

  return (
    <div className="col-sm-6">
      <p>{msg}</p>
    </div>
  );
}

export default Total;
