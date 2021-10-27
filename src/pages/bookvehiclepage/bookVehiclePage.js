import React, { useState, useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import {Link} from 'react-router-dom'
/* import Map from '../../components/map/Map'; */
import BookBikeBtn from '../../components/ui/buttons/BookBikeBtn';
import ReactDOM from 'react-dom';
import geoJson from '../../sthlm-sub.json';
import Bike from '../../components/ui/icons/Bike'

import './booking.css'

mapboxgl.accessToken = 'pk.eyJ1IjoicnViYWR1YiIsImEiOiJja3U1ZXR2ajcwbHc5MnZvNTI0d2cwNGl2In0.7u6g9rRD0OoysTdKbeNb4Q';

const Marker = ({ onClick, children, feature }) => {

    const _onClick = (e) => {
      onClick(`
      Cykel bokad på adress: ${feature.properties.adress}
      Närmaste t-bana station: ${feature.properties.title}
      ID: ${feature.properties.id}
      `);
    };
  
    return (
      <div onClick={_onClick}>
        <Bike>
        {children}
        </Bike>
        
      </div>
    );
  };

const BookVehicle = () => {
    const mapContainerRef = useRef(null);
    const [textInfo, setTextInfo] = useState('')
    const [lng, setLng] = useState(18.07248804438448);
    const [lat, setLat] = useState(59.31951525682159);
    const [zoom, setZoom] = useState(14);


    useEffect(() => {
        const map = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lng, lat],
          zoom: zoom,
        });
    
        // Render custom marker components
        geoJson.features.forEach((feature) => {
          // Create a React ref
          const ref = React.createRef();
          // Create a new DOM node and save it to the React ref
          ref.current = document.createElement('div');
          // Render a Marker Component on our new DOM node
          ReactDOM.render(
            <Marker onClick={markerClicked} feature={feature} />,
            ref.current
          );
    
          // Create a Mapbox Marker at our new DOM node
          new mapboxgl.Marker(ref.current)
            .setLngLat(feature.geometry.coordinates)
            .addTo(map);
        });
    
        // Add navigation control (the +/- zoom buttons)
        map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    
        map.on('move', () => {
          setLng(map.getCenter().lng.toFixed(4));
          setLat(map.getCenter().lat.toFixed(4));
          setZoom(map.getZoom().toFixed(2));
        });
    
        // Clean up on unmount
        return () => map.remove();
      }, []); // eslint-disable-line react-hooks/exhaustive-deps
    
      const markerClicked = (text) => {
        window.alert(text);
        setTextInfo(text)
      };
    

    /* const {longitude, latitude} = props; */
    return (
        <div className="map-wrapper">
            {/* <Map onClick={markerClicked}/> */}
            <div className="map-container" ref={mapContainerRef} />

            <div className="booking-text">
               <BookBikeBtn />
            </div>
            <div className="book-bottom-container">
                <div className="booking-info">
                    
                        {textInfo !== '' ?
                         ( 
                          <div>   
                            <h2>{textInfo}</h2>
                            <p>Lås upp cykeln med Qr koden på din biljett</p>
                        </div>   
                         ) : (
                            <div>
                             <h2>Inget fordon bokat</h2>
                             <p>ID: XXXXX XXX</p>
                                </div>
                     )} 
                      </div>
                   

                
            </div>
            <Link to="/bookBike">
                <button className="bookBike-btn">Boka fordon</button>
            </Link>
        </div>
     );
}
 
export default BookVehicle;