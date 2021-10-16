import React from 'react';
import './bookBikeBtn.css'
import ElScooter from '../icons/Scooter';
import Bike from '../icons/Bike';

const BookBikeBtn = () => {

    const handleClick = (e)=>{
        console.log("this is working fine");
        e.preventDefault();
        e.target.style.background = 'var(--color-neutral-700)'
        console.log(e.target);
    }
    return (
        <div className="bike-btns-wrapper">
            <div className="bike-btn-container">
                <button className="vehicle-btn book-bike">
                    Cykel
                    {/* <Bike /> */}
                </button>
                <button onClick={handleClick} className="vehicle-btn book-scooter">
                    Scooter
                   {/*  <ElScooter  /> */}
                </button>
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