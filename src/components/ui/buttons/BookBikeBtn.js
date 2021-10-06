import React from 'react';
import './bookBikeBtn.css'
import ElScooter from '../icons/Scooter';
import Bike from '../icons/Bike';

const BookBikeBtn = () => {

    
    return (
        <div className="bike-btns-wrapper">
            <div className="bike-btn-container">
                <button className="bike-btn book-bike">Cykel</button>
                <button className="bike-btn book-scooter">Scooter</button>
            </div>
            <div className="search-add bottom-container">                
                <div className="booking-info">
                    <h2>Din cykel är nu bokad</h2>
                    <p>ID: 76487 888</p>
                    <span>Lås upp cykel med Qr koden på din biljett</span>
                </div>
            </div>
        </div>
     );
}
 
export default BookBikeBtn;