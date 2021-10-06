import React, { useRef, useEffect, useState } from 'react';
import ReactMapGl, {MapContext} from 'react-map-gl';
import CustomeMarker from './CustomeMarker'

const SlMap = (props) => {

  const [viewport, setViewport] = useState({
    width: 375,
    height: 680,
    latitude: 59.319918261293616,
    longitude: 18.07229682616026,
    zoom: 14
  })

  const {longitude, latitude} = props;

  return (
  <div className="map-container">
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapStyle='mapbox://styles/mapbox/streets-v11'
      >
        {<CustomeMarker longitude={18.06745918103826} latitude={59.32316502594372} />}
        <CustomeMarker longitude={18.07248804438448} latitude={59.31951525682159} />
        <CustomeMarker longitude={18.073339016190776} latitude={59.315091943601246} />
        <CustomeMarker longitude={18.075807988683835} latitude={59.30808856970841} />
      </ ReactMapGl>
  </div>
 );
}






/* 

HOW I TRIED THE MAPBOX FIRST THEN CHANGED TO REACT_MAPBOX-GL 

mapboxgl.accessToken = `${process.env.REACT_APP_MAP_API}`
const SlMap = () => {

  const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(18.07229682616026);
const [lat, setLat] = useState(59.319918261293616);
const [zoom, setZoom] = useState(14);

  useEffect(() => {
  if (map.current) return; // initialize map only once
  map.current = new mapboxgl.Map({
  container: mapContainer.current,
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [lng, lat],
  zoom: zoom
  });
 
});
  
  return (
      <div>
      <div ref={mapContainer} className="map-container" />
      </div>
     );
} */
 
export default SlMap;

/* 59.319918261293616, 18.07229682616026 */
        
