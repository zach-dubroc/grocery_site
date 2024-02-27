import React from "react";
import NavBar from "./components/Header";
import GroceryMenu from "./components/GroceryMenu";
import Cart from "./components/Cart";

//TODO
//navbar, show item count, get filter types

function App() {
  const [cartItems, setCartItems] = React.useState([]);
  const [clear, setClear] = React.useState(false);
  const [showCart, setShowCart] = React.useState(false);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <NavBar showCart={showCart} show={setShowCart} />
        </div>
        <div className={showCart ? "col-sm-8" : "col-sm-12"}>
          <GroceryMenu addItems={setCartItems} />
        </div>
        <div className={showCart ? "col-sm-4" : "collapse"}>
          <Cart
            cartItems={cartItems}
            resetItems={setCartItems}
            clear={clear}
            clearList={setClear}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
