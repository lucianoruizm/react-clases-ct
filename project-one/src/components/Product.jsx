import { BuyBtn } from './BuyBtn';
import { Discount } from './Discount';
import { Heart } from './Heart';
import './Product.css';

const Product = ({discount, name, oldPrice, newPrice}) => {
  return (
    <div className="product">
        <Discount discount={discount} />
        <Heart />
        <img className="product__img" src="https://picsum.photos/180" alt="lorem picsum" />
        <h2 className="product__name">{name}</h2>
        <div className="product__details">
            <p className="product__oldPrice">${oldPrice}</p>
            <p className="product__newPrice">${newPrice}</p>
            <BuyBtn name={name} newPrice={newPrice} />
        </div>
    </div>
  )
}

export {Product}