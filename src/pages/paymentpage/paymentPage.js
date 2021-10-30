import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './payment.css';
import Swish from '../../components/ui/icons/Swish_Symbol_P3.png';

const PaymentPage = () => {
  const [tickets, setTickets] = useState();

  let newTicket = {
    id: 10,
    type: 'vuxen',
    price: 38,
    total: 76,
    date: '2021-09-21T14:28:06.419Z',
    active: true,
  };
  const sendTicket = () => {
    localStorage.setItem('tickets', JSON.stringify(newTicket));

    // set data with sessionStorage
    sessionStorage.setItem('mySessionStorageData', JSON.stringify(newTicket));
  };
  /* 
  function handlePayment() {
   
      
    }
  }
  
 */
  return (
    <div className='pay-wrapper'>
      <div className='pay-top-section'>
        <img src={Swish}></img>
      </div>

      <div className='pay-bottom-section'>
        <p>Betala</p>
        <div className='pay-bottom-info'>
          <p className='dimmed'>Mottagare</p>
          <h2>AB STORSTOCKHOLM LOKALTRAFIK</h2>
        </div>

        <div className='pay-bottom-info'>
          <p className='dimmed'>Belopp</p>
          <h2>38 SEK</h2>
        </div>

        <Link to='/ticketspage' className='pay-btn'>
          <button /* className='pay-btn' */ onClick={() => sendTicket()}>
            Betala
          </button>
        </Link>

        <Link to='/confirmpage'>
          <span>Avbryt</span>
        </Link>
      </div>
    </div>
  );
};

export default PaymentPage;
