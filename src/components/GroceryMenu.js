import React from "react";
import GroceryItem from "./GroceryItem";
import { v4 as uuidv4 } from "uuid";

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
              //!
              <GroceryItem
                id={uuidv4()}
                key={uuidv4()}
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
