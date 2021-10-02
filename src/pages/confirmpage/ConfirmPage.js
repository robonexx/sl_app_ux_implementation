import React, { useState } from 'react';
import './ConfirmPage.css'

const ConfirmTickets = () => {
    return (
        <div className="wrapper">
            <header className="confirm-header">
                <h1>Bekräfta</h1>
                <span>Avbryt</span>
            </header>

            <section className="confirm-top-section">
                <p>Biljetten börjar gälla direkt efter genomfört köp.</p>
            </section>

            <section className="confirm-section">
                <h3>Biljettyp</h3>
                <h3>Enkelbiljett SL</h3>
            </section>
            <section className="confirm-section">
                <h3>Antal vuxen</h3>
                <div className="buttons">
                    <button className="btn btn-minus">-</button>
                    <span>1</span>
                    <button className="btn btn-plus">+</button>
                </div>
            </section>
            <section className="confirm-section">
                <h3>Antal rabaterat</h3>
                <div className="buttons">
                    <button className="btn btn-minus">-</button>
                    <span>1</span>
                    <button className="btn btn-plus">+</button>
                </div>
            </section>
            <section className="confirm-section">
                <h3>Att betala</h3>
                <h3>38 kr</h3>
            </section>
            <div className="pay-btn-div">
                <button className="pay-btn">Fortsätt till betalning</button>
            </div>
        </div>
     );
}
 
export default ConfirmTickets;