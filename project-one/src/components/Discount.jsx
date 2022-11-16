import './Discount.css';

function Discount(props) {
  return (
    <div className='discount'>{props.discount}%</div>
  )
}

export {Discount}