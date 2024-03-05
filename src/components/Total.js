import React from "react";
//add subtotal
function Total(props) {
  //change to subtotal and total
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
      {props.subTotal === 0 ? (sub = "") : <h6>{sub}</h6>}
      {(props.subTotal === 0) & !props.clear ? (
        <h5>&#129402;</h5>
      ) : (
        <h5>
          {msg}
          <br />
          {props.subTotal > 200 ? <p>&#128517;</p> : <p>&#128515;</p>}
        </h5>
      )}
    </div>
  );
}

export default Total;
