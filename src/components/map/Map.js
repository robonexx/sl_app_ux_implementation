import mapboxgl from 'mapbox-gl';
import React, { useEffect, useRef, useState } from 'react';
import './Map.css';



mapboxgl.accessToken = 'pk.eyJ1IjoicnViYWR1YiIsImEiOiJja3U1ZXR2ajcwbHc5MnZvNTI0d2cwNGl2In0.7u6g9rRD0OoysTdKbeNb4Q';


const Map = () => {
  const mapContainerRef = useRef(null);
  const [lng, setLng] = useState(18.07248804438448);
  const [lat, setLat] = useState(59.31951525682159);
  const [zoom, setZoom] = useState(14);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });
  }, []);

   
  return (
    <div>
      <div className="map-container" ref={mapContainerRef} />

      
    </div>
  );
};

export default Map;
