import React from "react";
import Logo from "./images/foopLogo.png";
import SearchFilter from "./SearchFilter";
//check responsives
function NavBar(props) {
  const handleClick = () => {
    props.show((prev) => !prev);
    console.log(props);
  };

  return (
    <div className="row d-flex header">
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <img src={Logo} />

          <div className="col-sm-4 align-self-end">
            <SearchFilter
              menuItems={props.menuItems}
              filterItems={props.filterItems}
              setItems={props.setItems}
              filterLabel={props.menuItems}
            />
          </div>

          <div className="col-sm-4 align-self-end text-end">
            <button className="btn-dark btn" onClick={handleClick}>
              cart
              <h6>{props.count} item(s)</h6>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
