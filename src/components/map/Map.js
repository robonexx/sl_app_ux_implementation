import mapboxgl from 'mapbox-gl';
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import geoJson from '../../sthlm-sub.json';
import './Map.css';
import Bike from '../ui/icons/Bike'


mapboxgl.accessToken = 'pk.eyJ1IjoicnViYWR1YiIsImEiOiJja3U1ZXR2ajcwbHc5MnZvNTI0d2cwNGl2In0.7u6g9rRD0OoysTdKbeNb4Q';

const Marker = ({ onClick, children, feature }) => {
  const _onClick = (e) => {
    onClick(`
    Cykel bokad på adress: ${feature.properties.adress}
    Närmaste t-bana station: ${feature.properties.title}`
    );
  };

  return (
    <div onClick={_onClick} /* className="marker" */>
      <Bike>
      {/* {children} */}
      </Bike>
      
    </div>
  );
};

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
    return text
  };

  return (
    <div>
     {/*  <div className="sidebarStyle">
        <div>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div> */}
      <div className="map-container" ref={mapContainerRef} />

      
    </div>
  );
};

export default Map;
