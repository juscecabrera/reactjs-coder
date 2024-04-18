import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import './main.css'

function App() {

  const itemListContainerProps = {
    greeting: "Hola Usuario, bienvenido!",
    products: "Comida para perros"
  }

  return (
    <>
      <NavBar />
      <ItemListContainer 
      {...itemListContainerProps}
      /> 
    </>
  )
}

export default App
