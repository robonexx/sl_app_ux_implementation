import React from 'react';
import { Link } from 'react-router-dom';
import './BikeridePage.css';
import Timer from '../../components/timer/Timer';

const BikeridePage = () => {
  return (
    <div className='ride-wrapper'>
      <div className='ticket-card'>
        <div className='ticket-info'>
          <p>tid kvar på biljetten: </p>
          <h1>
            <Timer seconds={2700} />
          </h1>
          <p>Enkelbiljett SL</p>
          <p>1 vuxen</p>
        </div>
      </div>
      <div className='b-container'>
        <div className='b-info'>
          <p>Din bokade cykel finns nu tillgänglig på</p>
          <p>Adress: Katarinavägen 2 A, 116 45 Stockholm</p>
          <p>T-bana station: Slussen</p>
          <p>Boknings ID: 123</p>
        </div>
      </div>

      <Link to='/end'>
        <button className='ride-btn'>Avsluta</button>
      </Link>
    </div>
  );
};

export default BikeridePage;
<div>
  <div></div>
</div>;
