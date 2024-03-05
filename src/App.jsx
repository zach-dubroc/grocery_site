import React from "react";
import NavBar from "./components/Header";
import GroceryMenu from "./components/GroceryMenu";
import Cart from "./components/Cart";
import GroceryData from "./components/GroceryData";
import Footer from "./components/Footer";

function App() {
  //global states
  const [items, setItems] = React.useState(GroceryData);
  const [cartItems, setCartItems] = React.useState([]);
  const [clear, setClear] = React.useState(false);
  const [showCart, setShowCart] = React.useState(false);

  //grabs grocerydata types w/o duplicates for filter menu
  const menuItems = [...new Set(GroceryData.map((x) => x.type))];

  //sets the category for the filter cp
  const filterItems = (category) => {
    const newItems = GroceryData.filter((newVal) => newVal.type === category);
    setItems(newItems);
  };

  //delete item from cart function
  const deleteItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    console.log(id);
  };
  console.log(cartItems);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <NavBar
            //send props for hiding/showing cart + for filtering items by type
            count={cartItems.length}
            showCart={showCart}
            show={setShowCart}
            menuItems={menuItems}
            filterItems={filterItems}
            setItems={setItems}
            filterLabel={menuItems}
            clear={clear}
          />
        </div>
        {/* show/hide cart with class names */}
        <div className={showCart ? "col-sm-4" : "collapse"}>
          <Cart
            cartItems={cartItems}
            resetItems={setCartItems}
            clear={clear}
            clearList={setClear}
            delete={deleteItem}
          />
        </div>
        {/* resize menu based on cart vis*/}
        <div className={showCart ? "col-sm-8 border" : "col-sm-12 border-top"}>
          <GroceryMenu
            count={cartItems.length}
            items={items}
            addItems={setCartItems}
          />
        </div>
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
}

export default App;
