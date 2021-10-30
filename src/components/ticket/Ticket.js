import React from 'react';
import {Link} from 'react-router-dom'
import Timer from '../timer/Timer';
import QrCode from '../qrcode/QrCode';
import LeftArrow from '../ui/icons/LeftArrow';
import './Ticket.css'

const Ticket = () => {
    
    return (
        <div className="ticket">
            <header className="ticket-header">
            <Link to="/ticketspage">
                <span><LeftArrow /></span>
                </Link>
                <h1>Biljetter</h1>
                
                <Link to="/ticketspage">
                <span>Stäng</span>
                </Link>
               
            </header>
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
            <div className="redline"></div>
            <div className="ticket-timer">
                <h4><Timer seconds={4500} /></h4>
               
                    <QrCode text={`Giltig biljett ${new Date().toLocaleString() + ''}`}/>
               
            </div>
        </div>
        
     );
}
 
export default Ticket;