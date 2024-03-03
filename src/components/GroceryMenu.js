import React from "react";
import GroceryItem from "./GroceryItem";
//redo
function GroceryMenu(props) {
  const adItems = (data) => {
    props.addItems((prev) => [...prev, data]);
  };

  return (
    <div className="row">
      <div className="col-sm-12 border-start border-top border-dark">
        <div className="overflow-auto row menu">
          {/* map over grocery data, send props to grocery items component */}
          {props.items.map((y) => {
            return (
              <GroceryItem
                key={Math.random()}
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
