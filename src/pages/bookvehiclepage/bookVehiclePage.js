import React from 'react';
import {Link} from 'react-router-dom'
import Map from '../../components/map/Map';
import BookBikeBtn from '../../components/ui/buttons/BookBikeBtn';

import './booking.css'

const BookVehicle = () => {

    /* const {longitude, latitude} = props; */
    return (
        <div className="map-wrapper">
            <Map/>
          
            <div className="booking-text">
               <BookBikeBtn />
            </div>
            <div className="bottom-container">
                <div className="booking-info">
                    
                         {/* {active.type === 'Bike'  ?
                         ( */}
                             <>
                        <h2>Din är nu bokad</h2>
                             <p>ID: 76487 888</p>
                             <span>Lås upp cykeln med Qr koden på din biljett</span>
                             </>
                        {/*  ) : (
                             <>
                             <h2>Din scooter är nu bokad</h2>
                             <p>ID: 76487 889</p>
                                 <span>Lås upp scootern med Qr koden på din biljett</span>
                             </>
                     )} */}
                      </div>
                   

                
            </div>
            <Link to="/bookBike">
                <button className="bookBike-btn">Boka fordon</button>
            </Link>
        </div>
     );
}
 
export default BookVehicle;