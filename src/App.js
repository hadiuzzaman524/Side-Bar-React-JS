import Header from "./UI/Header";
import Meals from './Meals/Meals';
import Cart from "./UI/Cart";

function App() {
  return (
    <>
    <Cart/>
      <Header/>
      <main>
      <Meals></Meals>
      </main>
    </>
  );
}

export default App;
