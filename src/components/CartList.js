import React from "react";
//displays price and title from items clicked on in grocery menu
//TODO add button to clear item
function CartList(props) {
  return (
    <div
      className={`d-flex cartlist border-bottom border-dark justify-content-between align-items-baseline p-2`}
    >
      <div className="text-start">
        <h4>{props.title}</h4>
      </div>
      <div className="text-end">
        <h6>{props.price.toFixed(2)}$</h6>
        <button onClick={() => props.delete(props.id)} className="btn btn-dark">
          x
        </button>
        {/* make delete button work*/}
      </div>
    </div>
  );
}

export default CartList;
