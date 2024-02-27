import React from "react";

function Total(props) {
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
