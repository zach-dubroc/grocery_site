import React from "react";

function NavBar(props) {
  const handleClick = () => {
    props.show((prev) => !prev);
    console.log(props);
  };

  return (
    <div className="row d-flex border-bottom">
      <div className="col-sm-4">
        <h1>I'm a nav bar</h1>
      </div>
      <div className="col-sm-8 text-end">
        <button onClick={handleClick}>cart</button>
      </div>
    </div>
  );
}

export default NavBar;
