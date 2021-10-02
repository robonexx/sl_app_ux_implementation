import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TicketCard.css'
import QrCodeIcon from '../ui/icons/QrCodeIcon';
import Bike from '../ui/icons/Bike';
import Timer from '../timer/Timer';

const TicketCard = () => {
    /* const [showtimer, setShowTimer ] = useState(true) */

    return (
        <div className="ticket-card">
            <div className="ticket-info">
               <h1><Timer seconds={4500}/></h1> 
            <h3>Enkelbiljett</h3>
            <p>1 rabatterad</p>
            </div>
            <div className="ticket-bottom">
                <span>Reservera cykel</span>
                <div className="show-ticket">
                    <Link
                        className="links"
                        to="/showticket"
                    >
                        <h3>Visa biljett </h3>
                    </Link>
                    <QrCodeIcon className="icons"/>
                    </div>
            </div>
            
        </div>
     );
}
 
export default TicketCard;