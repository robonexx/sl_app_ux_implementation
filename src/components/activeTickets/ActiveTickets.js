import React from 'react'
import './style.css'
import TicketCard from '../ticket/TicketCard'

const ActiveTickets = ({ isActive, setIsActive }) => {
  
  
  return (
    
    <section className='your-tickets'>
     <h2 className="tickets-header">Dina biljetter</h2>

      <div>
      {isActive ? (
        <div className='ticket-holder'>
          <p>Du har inga biljetter på den här telefonen.</p>
          </div>
        ) : (
          <TicketCard
            isActive={isActive}
            setIsActive={setIsActive}
          />
        )}
      </div>
    </section>
  )
}

export default ActiveTickets
