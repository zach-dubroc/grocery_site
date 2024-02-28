import React from "react";
import NavBar from "./components/Header";
import GroceryMenu from "./components/GroceryMenu";
import Cart from "./components/Cart";
import GroceryData from "./components/GroceryData";
import SearchFilter from "./components/SearchFilter";

//TODO
//add subtotal into checkout
function App() {
  const [items, setItems] = React.useState(GroceryData);
  const [cartItems, setCartItems] = React.useState([]);
  const [clear, setClear] = React.useState(false);
  const [showCart, setShowCart] = React.useState(false);
  const menuItems = [...new Set(GroceryData.map((x) => x.type))];

  const filterItems = (category) => {
    const newItems = GroceryData.filter((newVal) => newVal.type === category);
    setItems(newItems);

    console.log(menuItems);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <NavBar
            count={cartItems.length}
            showCart={showCart}
            show={setShowCart}
            menuItems={menuItems}
            filterItems={filterItems}
            setItems={setItems}
            filterLabel={menuItems}
          />
        </div>
        <div className={showCart ? "col-sm-4" : "collapse"}>
          <Cart
            cartItems={cartItems}
            resetItems={setCartItems}
            clear={clear}
            clearList={setClear}
          />
        </div>

        <div className={showCart ? "col-sm-8 border" : "col-sm-12 border-top"}>
          <GroceryMenu
            count={cartItems.length}
            items={items}
            addItems={setCartItems}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
