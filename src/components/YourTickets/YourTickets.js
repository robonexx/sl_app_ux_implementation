import React, { useState, useEffect } from 'react';
import './YourTickets.css';
import TicketCard from '../ticket/TicketCard';

const YourTickets = () => {
  const [isValid, setIsValid] = useState(false);
/* 
  const getTickets = () => {
    let data = localStorage.getItem('tickets');

    if (!data) {
      return;
    } else {
      data = JSON.parse(data);
      console.log(`name: ${data.type} and active: ${data.active}`);

      setIsValid(data.active);
    }

    console.log(isValid);
    
    //if I wanna use sessionStorage instead to get the data
    
    // let data = sessionStorage.getItem('mySessionStorageData')
    // data = JSON.parse(data)
    // console.log(data.active)
    
  }; */

  useEffect(() => {
    let data = localStorage.getItem('tickets');

    if (!data) {
      return;
    } else {
      data = JSON.parse(data);
      console.log(`name: ${data.type} and active: ${data.active}`);

      setIsValid(data.active);
    }

    console.log(isValid);
  }, []);

  /*  const activeTicket = true */
  return (
    <section className='your-tickets'>
      <h2 className='tickets-header'>Dina biljetter</h2>

      <div /* onClick={getTickets} */>
        {isValid === true ? (
          <TicketCard />
        ) : (
          <div className='ticket-holder'>
            <p>Du har inga biljetter på den här telefonen.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default YourTickets;
