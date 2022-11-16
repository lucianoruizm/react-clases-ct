import { useContext } from "react"
import { ProductsContext } from "../Contexts/ProductsContextProvider"
import { TotalContext } from "../Contexts/TotalContextProvider"

export const CardsContainer = () => {

  const products = useContext(ProductsContext)
  const [total, setTotal] = useContext(TotalContext)

  return (
    <div className="cardContainer">
      {products.map(product => {
        return (
            <div className="card" key={product.id}>
              <img src={product.images[0]} className="card-img" alt="img" />
              <p className="product-name">{product.title}</p>
              <div className="priceContainer">
                <p className="price">
                    ${product.price}
                </p>
                <button onClick={()=>setTotal(total + product.price)}>Add to cart</button>
               </div>
            </div>
        )
      })
    }
    </div>   
  )
}