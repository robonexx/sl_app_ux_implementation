import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './payment.css'
import Swish from '../../components/ui/icons/Swish_Symbol_P3.png'

const PaymentPage = () => {
    const [validTicket, setValidTicket] = useState(false)

    const handleValidTicket = () => {
    setValidTicket(validTicket => !validTicket);
    }
    return (
        <div className="pay-wrapper">
            <div className="pay-top-section">
                <img src={Swish}></img>
            </div>

            <div className="pay-bottom-section">
                <p>Betala</p>

                <div className="pay-bottom-info">
                    <p className="dimmed">Mottagare</p>
                    <h1>AB STORSTOCKHOLM LOKALTRAFIK</h1>
                </div>
                <div className="pay-bottom-info">
                    <p className="dimmed">Belopp</p>
                    <h1>38,00 SEK</h1>
                </div>
            <button
                className="pay-btn"
                onClick={() => setValidTicket(handleValidTicket)}>
                Betala
                </button>
                <Link to="/confirmpage">
                <span>Avbryt</span>
                </Link>
            </div>
        </div>
     );
}
 
export default PaymentPage;