import Header from "./UI/Header";
import Meals from "./Meals/Meals";
import Cart from "./UI/Cart";
import { useState } from "react";
import CartProvider from "./Store/CartContextProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const openCart = (props) => {
    setShowCart(true);
  };
  const closeCart = (props) => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      {showCart && <Cart closeCart={closeCart} />}
      <Header openCart={openCart} />
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
