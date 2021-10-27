import React from 'react';
import Map from '../../components/map/Map';
import TravelBtns from '../../components/ui/buttons/TravelBtns';
import './TravelMap.css'

const TravelMap = () => {
    return (
        <div className="map-wrapper">
             <Map />
            
            <TravelBtns />
        </div>
     );
}
 
export default TravelMap;