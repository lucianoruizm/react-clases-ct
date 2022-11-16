import { useContext } from "react"
import { TotalContext } from "../Contexts/TotalContextProvider"

export const Cart = () => {
   
  const [total, setTotal] = useContext(TotalContext)

  return (
    <div className="cart-container">
        <div className="cart">
            <p>Total: ${total}</p>
            <button onClick={() => {setTotal(0)}}>Borrar</button>
        </div>
    </div>
  )
}