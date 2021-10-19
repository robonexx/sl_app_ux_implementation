import React from 'react';
import Map from '../../components/map/Map';
import BookBikeBtn from '../../components/ui/buttons/BookBikeBtn';

import './booking.css'

const BookVehicle = (props) => {

    const {longitude, latitude} = props;
    return (
        <div className="map-wrapper">
            <Map/>
          
            <div className="booking-text">
               <BookBikeBtn />
            </div>
        </div>
     );
}
 
export default BookVehicle;