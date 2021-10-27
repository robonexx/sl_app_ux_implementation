import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './TicketsPage.css'
import Add from '../../components/ui/icons/Add'
/* import TicketCard from '../../components/ticket/TicketCard' */
import ActiveTickets from '../../components/activeTickets/ActiveTickets';

const TicketsPage = ({ isValid, setIsValid }) => {
     

    return (
         <div className="tickets-wrapper">
              <ActiveTickets
               isValid={isValid}
               setIsValid={setIsValid}
              />
         {/*  <section className='your-tickets'>
                   <h2 className="tickets-header">Dina biljetter</h2>
                   {
                    !activeTicket ?
                        <div className='ticket-holder'>
                              <p>Du har inga biljetter på den här telefonen.</p> 
                             </div>
                             :
                             <TicketCard />
                   }
               
          </section> */}

          <section className='buy-tickets'>
               <h2 className='tickets-header'>Köp ny biljett</h2>
               <div className='ticket-type'>
                  <Link className="links" to="/confirmpage">  <h3 className="tickets-sub-header">Enkelbiljett</h3> </Link>
                    <p>Obegränsat antal resor inom 75 minuter</p>
               </div>
               <div className='ticket-type'>
                    <h3>30-dagarsbiljett</h3>
                    <p>För dig som reser regelbundet</p>
               </div>
               <div className='ticket-type'>
                    <h3>Övriga biljetter</h3>
                    <p>Se hela biljettutbudet</p>
               </div>
          </section>

          <section className='handle-tickets'>
                   <h2 className='tickets-header'>Hantera Biljetter</h2>
                   <div className='ticket-type'>
                    <h3 className="tickets-sub-header">SL-kort</h3>
                    <p>Se innehåll och köp biljetter till ditt SL-kort</p>
               </div>
               <div className='ticket-type'>
                    <h3>Köphistorik och kvitton</h3>
               </div>
               <div className='space ticket-type'>
                    <h3>Lägg till nytt betalkort</h3>
                    <Add className="icons add" />
               </div>
               <div className='space ticket-type'>
                    <h3>Förlustgaranti</h3>
                    <span className='logga-in'>Logga in för att aktivera</span>
               </div>
               <div className='ticket-type'>
                    <h3>Återskapa appbiljetter</h3>
               </div>
          </section>

        </div>
     );
}
 
export default TicketsPage;