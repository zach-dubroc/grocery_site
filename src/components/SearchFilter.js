import React from "react";

function Filter(props) {
  return (
    <div className="row text-center">
      <div className="col-sm-12">
        <h6>I'm a filter/searchbar</h6>
        <select name="filter" id="filter">
          <option value="">{props.category}</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
