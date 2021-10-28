import React, {useState, useEffect} from 'react'
import './style.css'
import TicketCard from '../ticket/TicketCard'

const ActiveTickets = ({ isValid, setIsValid }) => {
  

 /*  const activeTicket = true */
  return (
    
    <section className='your-tickets'>
     <h2 className="tickets-header">Dina biljetter</h2>

      <div>
      {!isValid ? <TicketCard
          /> :
        <div className='ticket-holder'>
          <p>Du har inga biljetter på den här telefonen.</p>
          </div>
          
        }
      </div>
    </section>
  )
}

export default ActiveTickets
