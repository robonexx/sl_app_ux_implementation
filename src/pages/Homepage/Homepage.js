import React from 'react';
import Map from '../../components/map/Map';
import TravelBtns from '../../components/TravelBtnsContainer';
import './Homepage.css'

const Homepage = () => {
    return (
        <div className="map-wrapper">
             <Map />
            
            <TravelBtns />
        </div>
     );
}
 
export default Homepage;