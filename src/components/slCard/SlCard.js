import React from 'react';
import './slcard.css';
import Img from '../../assets/images/sl.png';

// No important file just testing stuff out
const SlCard = () => {
  return (
    <div className='card-wrapper'>
      <div className='cardContent'>
        <img src={Img} alt='' />
      </div>
    </div>
  );
};

export default SlCard;
