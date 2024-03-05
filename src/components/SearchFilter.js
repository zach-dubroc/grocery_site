import React from "react";
import GroceryData from "./GroceryData";

// update label state based on clicked value, send filter value to App
function SearchFilter({ menuItems, filterItems, setItems }) {
  const [label, setLabel] = React.useState("category");
  return (
    <div className="row">
      <div className="dropdown align-self-end">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {label}
        </button>
        <ul
          className="dropdown-menu text-center bg-light"
          aria-labelledby="dropdownMenuButton1"
        >
          <button
            type="dropdown-item"
            href="#"
            onClick={() => {
              setLabel((prev) => "all");
              setItems(GroceryData);
            }}
            className="btn-dark btn p-2 m-1"
          >
            all
          </button>
          {/* maps through list of categories makes a button for each*/}
          {menuItems.map((val) => (
            <button
              key={Math.random()}
              type="dropdown-item"
              href="#"
              onClick={() => {
                setLabel((prev) => val);
                //sends type to filter function
                filterItems(val);
              }}
              className="btn-dark btn p-2 m-1 px-1"
            >
              {val}
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchFilter;
