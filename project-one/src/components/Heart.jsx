import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import './Heart.css';

const Heart = ()=>{

  const [liked, setLiked] = useState(false);
  let className = 'heart';

  const handleClick = () => {
    liked === true ? setLiked(false) : setLiked(true);
  }

  return (
    <div onClick={handleClick}>
      {liked === true ? <FaHeart className={className} /> : <FaRegHeart className={className} />}
    </div>
  )
}

export {Heart}