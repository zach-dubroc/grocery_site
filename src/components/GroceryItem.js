import React from "react";

function groceryItem({ price, title, img, id, handleItem }) {
  let item = { price, title, img, id, handleItem };

  return (
    <div className="col-sm-4 align-items-center text-center mt-4">
      <div className="row text-nowrap overflow-hidden">
        <div className="col-sm-12">
          <h6>{title}</h6>
        </div>
      </div>
      <img className="thumbnail" src={require(`./images/${img}`)} alt="" />
      <h6>{price.toFixed(2)}$</h6>
      {/* call add to cart function on item */}
      <input
        className="btn"
        type="button"
        value={`add to cart`}
        onClick={() => handleItem(item)}
      />
    </div>
  );
}

export default groceryItem;
