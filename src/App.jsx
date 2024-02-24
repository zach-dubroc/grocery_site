import React from "react";
import NavBar from "./components/Header";
import GroceryMenu from "./components/GroceryMenu";
import Cart from "./components/Cart";
//TODO
//get and display total in cart component

function App() {
  const [cartItems, setCartItems] = React.useState([]);

  const [showCart, setShowCart] = React.useState(false);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <NavBar />
        </div>
        <div className="col-sm-8">
          <GroceryMenu addItems={setCartItems} />
        </div>
        <div className="col-sm-4">
          {/* send array of cart items from menu cp -> cart cp */}
          <Cart cartItems={cartItems} />
        </div>
      </div>
    </div>
  );
}

export default App;
