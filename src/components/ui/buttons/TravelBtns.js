import React from 'react';
import './TravelBtns.css'
import AddFavorite from './AddFavorite';
import SearchBar from './SearchBar';

const TravelBtns = () => {
    return (
        <div className="travel-btns-wrapper">
            <div className="travel-btn-container">
                <button className="travel-btn search">Sök resa</button><button className="travel-btn departures">Avgångar</button>
            </div>
            <div className="search-add bottom-container">
                <SearchBar />
                <AddFavorite />
            </div>
        </div>
     );
}
 
export default TravelBtns;