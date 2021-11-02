import React, { useState, useEffect } from 'react';
import './YourTickets.css';
import TicketCard from '../ticket/TicketCard';
import Modal from '../Modal/Modal';


const MoreInfo = () => (
  <div>
    <h3 style={{fontWeight: 'bolder', fontSize: '1.4rem'}}>Information</h3>
    <p>This is not a fully working application! <br />
      On this page you can choose the ticket you want to buy - Enkelbiljett!<br />
      On the coming page you can choose to buy 1 adult ticket (counter and total amout works but is not functional)<br />
      then continue to payment, when you are back on this page You can see your active ticket and there choose to book a bike.
    </p>
  </div>
)

const YourTickets = () => {
  const [isValid, setIsValid] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [hasVisited, setHasVisited] = useState(false)

  const handleModal = () => {
    setShowModal(false);
  };
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
    let hasVisitedBefore = JSON.parse(localStorage.getItem('hasVisitedBefore'));

    if (hasVisitedBefore) {
      setHasVisited(true)
    }

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
      {!hasVisited && showModal ? <Modal handleModal={handleModal}>
        <MoreInfo />
        </Modal> : null
      }
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
