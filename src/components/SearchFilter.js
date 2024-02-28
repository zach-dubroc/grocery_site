import React from "react";
import GroceryData from "./GroceryData";
//redo
function SearchFilter({ menuItems, filterItems, setItems, filterLabel }) {
  const [label, setLabel] = React.useState("category");
  return (
    <div className="row">
      <div className="col-sm-12"></div>
      <div className="d-flex justify-content-center">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {label}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <button
              class="dropdown-item"
              href="#"
              onClick={() => {
                setLabel((prev) => "all");
                setItems(GroceryData);
              }}
              className="btn-dark btn p-2 m-1"
            >
              all
            </button>
            {menuItems.map((val) => (
              <button
                class="dropdown-item"
                href="#"
                onClick={() => {
                  setLabel((prev) => val);
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
    </div>
  );
}

export default SearchFilter;
