import React from "react";
import GroceryItem from "./GroceryItem";
import GroceryData from "./GroceryData";

function GroceryMenu() {
  return (
    <div className="row">
      <div className="col-sm-12 border">
        <div className="overflow-auto row menu">
          {GroceryData.map((y) => {
            return (
              <GroceryItem title={y.title} price={y.price} img={y.filename} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default GroceryMenu;
