import { CardsContainer } from "./components/CardsContainer"
import { Cart } from "./components/Cart"
import { ProductsContextProvider } from "./Contexts/ProductsContextProvider"
import { TotalContextProvider } from "./Contexts/TotalContextProvider"

function App() {
  
  return (
    <ProductsContextProvider>
      <TotalContextProvider>
        <div className="App">
          <CardsContainer />
          <Cart />
        </div>
      </TotalContextProvider>
    </ProductsContextProvider>
  )
}

export default App
