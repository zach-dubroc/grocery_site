import React from "react";
//redo
function groceryItem({ price, title, img, handleItem }) {
  let item = { price, title, img, handleItem };

  return (
    <div className="col-sm-4 align-items-center text-center mt-4">
      <div className="row text-nowrap overflow-hidden">
        <div className="col-sm-12">
          <h6>{title}</h6>
        </div>
      </div>
      <img className="thumbnail" src={require(`./images/${img}`)} alt="" />
      <h6>{price.toFixed(2)}$</h6>

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
