import '../sass/Button.scss';

export const Button = ({arrow, handleClick}) => {
  return (
    <div className='button__box'>
        <button 
          className="button" 
          onClick={handleClick}>{arrow}</button>
        <div className="button__shadow"></div>
    </div>
  )
}