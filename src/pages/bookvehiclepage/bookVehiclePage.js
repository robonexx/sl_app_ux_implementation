import React from 'react';
import SlMap from '../../components/map/SlMap'
import BookBikeBtn from '../../components/ui/buttons/BookBikeBtn';

import './booking.css'

const BookVehicle = (props) => {

    const {longitude, latitude} = props;
    return (
        <div className="map-wrapper">
            <SlMap/>
          
            <div className="booking-text">
               <BookBikeBtn />
            </div>
        </div>
     );
}
 
export default BookVehicle;