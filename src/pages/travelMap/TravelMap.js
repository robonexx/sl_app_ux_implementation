import React from 'react';
import SlMap from '../../components/map/SlMap';
import Map from '../../components/map/Map';
import TravelBtns from '../../components/ui/buttons/TravelBtns';
import './TravelMap.css'

const TravelMap = () => {
    return (
        <div className="map-wrapper">
             <SlMap />
            
            <TravelBtns />
        </div>
     );
}
 
export default TravelMap;