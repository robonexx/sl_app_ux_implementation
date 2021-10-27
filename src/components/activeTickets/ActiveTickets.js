import React,{useState, useEffect} from 'react'
import './style.css'
import TicketCard from '../ticket/TicketCard'

const ActiveTickets = ({ isValid, setIsValid }) => {
  
  const [isActive, setIsActive] = useState(false)
/* 
useEffect(() => {
  if(isValid === true) {
    setIsActive(true)
  }
}, [isActive]) */
  
  return (
    
    <section className='your-tickets'>
     <h2 className="tickets-header">Dina biljetter</h2>

      <div>
      {(isActive === true) ? (
        <div className='ticket-holder'>
          <p>Du har inga biljetter på den här telefonen.</p>
          </div>
        ) : (
          <TicketCard
          />
        )}
      </div>
    </section>
  )
}

export default ActiveTickets
