import React from "react";

function groceryItem({ price, title, img, handleItem }) {
  //take in props for each grocery item card
  let item = { price, title, img, handleItem };

  return (
    <div className="col-sm-4 align-items-center text-center">
      <div className="row text-nowrap overflow-hidden">
        <div className="col-sm-12">
          <h6>{title}</h6>
        </div>
      </div>
      <img className="thumbail" src={require(`./images/${img}`)} alt="" />
      <h6>{price.toFixed(2)}$</h6>
      {/* set onClick to call function inside of props
      which comes from main app component, down to menu component, then to here */}
      <input type="button" value={"add"} onClick={() => handleItem(item)} />
    </div>
  );
}

export default groceryItem;
