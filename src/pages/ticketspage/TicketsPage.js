import React from 'react';
import {Link} from 'react-router-dom'
import './TicketsPage.css'
import Add from '../../components/ui/icons/Add'
import TicketCard from '../../components/ticket/TicketCard'

const TicketsPage = () => {

     const activeTicket = true
     

    return (
        <div className="tickets-wrapper">
          <section className='your-tickets'>
               <div className='blue-border '></div>
                   <h2 className="tickets-header">Dina biljetter</h2>
                   {
                    !activeTicket ?
                        <div className='ticket-holder'>
                              <p>Du har inga biljetter på den här telefonen.</p> 
                             </div>
                             :
                             <TicketCard />
                   }
               
          </section>

          <section className='buy-tickets'>
               <div className='blue-border '></div>
               <h2 className='tickets-header'>Köp ny biljett</h2>
               <div className='ticket-type'>
                  <Link className="links" to="/confirmpage">  <h3>Enkelbiljett</h3> </Link>
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

          <section id='handle-tickets'>
               <div className='blue-border'></div>
               <h2 className='tickets-header'>Hantera Biljetter</h2>
               <div className='ticket-type handle-tickets-subheader'>
                    <h3>Köphistorik och kvitton</h3>
               </div>
               <div className='space-between ticket-type handle-tickets-subheader'>
                    <h3>Lägg till nytt betalkort</h3>
                    <Add className="icons" />
               </div>
               <div className='space-between ticket-type handle-tickets-subheader'>
                    <h3>Förlustgaranti</h3>
                    <span className='logga-in'>Logga in för att aktivera</span>
               </div>
               <div className='ticket-type handle-tickets-subheader'>
                    <h3>Återskapa appbiljetter</h3>
               </div>
          </section>

        </div>
     );
}
 
export default TicketsPage;