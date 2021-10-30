import React from 'react';
import { Link } from 'react-router-dom';
import './TicketCard.css';
import QrCodeIcon from '../ui/icons/QrCodeIcon';
import Timer from '../timer/Timer';

const TicketCard = () => {
  return (
    <div className='ticket-card'>
      <div className='ticket-info'>
        <h1>
          <Timer seconds={4500} />
        </h1>
        <p>Enkelbiljett SL</p>
        <p>1 vuxen</p>
      </div>
      <div className='ticket-bottom'>
        <div>
          <Link className='links' to='/bookvehicle'>
            <span className='info-text'>Reservera fordon</span>
          </Link>
        </div>
        <div className='show-ticket'>
          <Link className='links' to='/showticket'>
            <span className='info-text'>Visa biljett </span>
          </Link>
          <QrCodeIcon className='icons' />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
