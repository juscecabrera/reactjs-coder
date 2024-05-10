import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error/Error.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './main.css'


function App() {

  const itemListContainerProps = {
    greeting: "Hola Usuario, bienvenido!",
    products: "Comida para perros"
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}> 
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<ItemListContainer />}/>
          <Route path="/products/:prodId" element={<ItemListContainer />}/>
          {/* <Route path="/category/:catId" element={<ItemDetailContainer />}/> */}
          <Route path="*" element={<Error />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
