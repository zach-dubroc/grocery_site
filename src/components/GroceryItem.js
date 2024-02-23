import React from "react";
//TODO
//get add button funcional
//context API/all in one file/individual
function groceryItem(props) {
  return (
    <div className="col-sm-4 align-items-center text-center">
      <div className="row text-nowrap overflow-hidden">
        <div className="col-sm-12">
          <h6>
            {props.title.length > 25 ? props.title.split(" ")[0] : props.title}
          </h6>
        </div>
      </div>
      <img className="thumbail" src={require(`./images/${props.img}`)} alt="" />
      <h6>{props.price.toFixed(2)}$</h6>
      <input type="button" value={"add"} />
    </div>
  );
}

export default groceryItem;
