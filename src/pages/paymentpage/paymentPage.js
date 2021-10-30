import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './payment.css';
import Swish from '../../components/ui/icons/Swish_Symbol_P3.png';



const PaymentPage = ({total}) => {
  const [isValid, setIsValid] = useState(false);

  console.log(isValid)
  useEffect(() => {
   window.localStorage.setItem('tickets', JSON.stringify)
  })
  /* 
  function handlePayment() {
   
   
      const uniqueid = () => {
          const dateString = Date.now().toString(22)
      
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
          <h1>AB STORSTOCKHOLM LOKALTRAFIK</h1>
        </div>

        <div className='pay-bottom-info'>
          <p className='dimmed'>Belopp</p>
          <h1>{total} SEK</h1>
        </div>

       {/*  <Link
          to='/ticketspage'
          className='pay-btn'
        > */}
        <button
          className='pay-btn'
            onClick={() => setIsValid(true)}
          >Betala</button>
        {/* </Link> */}

        <Link to='/confirmpage'>
          <span>Avbryt</span>
        </Link>
      </div>
    </div>
  );
};

export default PaymentPage;
