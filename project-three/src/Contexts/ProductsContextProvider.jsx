import { useState } from "react"
import { useEffect } from "react"
import { createContext } from "react"

export const ProductsContext = createContext()

export const ProductsContextProvider = ({children}) => {
  
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(res => res.json())
    .then(data => setProducts(data))
  } , [])

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  )
}
