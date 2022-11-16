import './BuyBtn.css';

const BuyBtn = ({ name, newPrice})=>{
  return (
    <button onClick={() => {alert(`Product: ${name}, Price: $${newPrice} added to cart`)}}>Comprar</button>
  )
}

export {BuyBtn}