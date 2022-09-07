import Header from "./UI/Header";
import Meals from "./Meals/Meals";
import Cart from "./UI/Cart";
import { useState } from "react";

function App() {
  const [showCart, setShowCart] = useState(false);

  const openCart = (props) => {
    setShowCart(true);
  };
  const closeCart = (props) => {
    setShowCart(false);
  };

  return (
    <>
      {showCart && <Cart closeCart={closeCart}/>}
      <Header openCart={openCart}/>
      <main>
        <Meals></Meals>
      </main>
    </>
  );
}

export default App;
