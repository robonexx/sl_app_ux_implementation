import React from 'react';
import Timer from '../timer/Timer';
import QrCode from '../qrcode/QrCode';
import './Ticket.css'

const Ticket = () => {
    return (
        <div className="ticket"> 
            <div className="green-ani">
                <div class="waves">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="ticket-timer">
                <h4><Timer seconds={4500} /></h4>
               
                    <QrCode text={`Giltig biljett ${new Date().toLocaleString() + ''}`}/>
               
            </div>
        </div>
        
     );
}
 
export default Ticket;