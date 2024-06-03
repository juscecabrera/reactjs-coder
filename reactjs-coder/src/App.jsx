import './main.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error/Error.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import Cart from "./components/Cart/Cart.jsx";
import CartContextProvider from './context/CartContext.jsx';


function App() {

  const itemListContainerProps = {
    greeting: "Hola Usuario, bienvenido!",
    products: "Comida para perros"
  }

  return (
    <CartContextProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}> 
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<ItemListContainer />}/>
          <Route path="/products/:prodId" element={<ItemDetailContainer />}/>
          <Route path="/category/:catId" element={<ItemListContainer />}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;
