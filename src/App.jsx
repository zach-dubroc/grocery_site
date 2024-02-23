import React from "react";
import NavBar from "./components/Header";
import GroceryMenu from "./components/GroceryMenu";
import Cart from "./components/Cart";
//TODO
//get grid of grocery items mapped
//make add cart button functional

function App() {
  const [cartItems, setCartItems] = React.useState([]);
  const [showCart, setShowCart] = React.useState(false);

  return (
    <div className="container-fluid">
      <NavBar />
      <GroceryMenu />
      <Cart />
    </div>
  );
}

export default App;
