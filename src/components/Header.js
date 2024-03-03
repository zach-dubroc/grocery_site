import React from "react";
import Logo from "./images/foopLogo.png";
import SearchFilter from "./SearchFilter";

function NavBar(props) {
  //sets cart button to show/hide cart on click
  const handleClick = () => {
    props.show((prev) => !prev);
  };

  return (
    <div className="row d-flex flex-nowrap header">
      <nav className="navbar">
        <div className="container-fluid">
          <img src={Logo} />
          <h3 className="font-monospace">[slogan]</h3>
          <div className="align-self-end text-end d-flex pe-2">
            {/* pass filter functions to filter */}
            <SearchFilter
              menuItems={props.menuItems}
              filterItems={props.filterItems}
              setItems={props.setItems}
              filterLabel={props.menuItems}
            />
            <button className="btn-dark btn" onClick={handleClick}>
              cart <i className="fa fa-shopping-cart"></i>
              {!props.clear ? <h6>{props.count} item(s)</h6> : ""}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
