import React from 'react';
import './TravelBtns.css'
import AddFavorite from '../Buttons/AddFavorite';
import SearchBar from '../Buttons/SearchBar';

const TravelBtns = () => {
    return (
        <div className="travel-btns-wrapper">
            <div className="travel-btn-container">
                <button className="travel-btn search">Sök resa</button>
                <button className="travel-btn departures">Avgångar</button>
            </div>
            <div className="bottom-container">
                <SearchBar />
                <AddFavorite />
            </div>
        </div>
     );
}
 
export default TravelBtns;