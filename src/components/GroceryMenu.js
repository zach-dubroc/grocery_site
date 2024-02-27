import React from "react";
import GroceryItem from "./GroceryItem";
import GroceryData from "./GroceryData";

function GroceryMenu(props) {
  //adds data containing gorovet item info to new array to be used in cart state
  const adItems = (data) => {
    props.addItems((prev) => [...prev, data]);
    //console.log(data);
  };

  return (
    <div className="row">
      <div className="col-sm-12 border">
        <div className="overflow-auto row menu">
          {/* map over grocery data, send props to grocery items component */}
          {GroceryData.map((y) => {
            return (
              <GroceryItem
                title={y.title}
                price={y.price}
                img={y.filename}
                handleItem={adItems}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default GroceryMenu;
