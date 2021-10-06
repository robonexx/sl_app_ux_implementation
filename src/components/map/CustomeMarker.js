import React from 'react';
import { MapContext } from 'react-map-gl'
import './SlMap.css'
import Bike from '../ui/icons/Bike'


function CustomMarker(props) {
    const context = React.useContext(MapContext);
    
    const {longitude, latitude} = props;
  
    const [x, y] = context.viewport.project([longitude, latitude]);
  
    const markerStyle = {
        position: 'absolute',
        background: 'transparent',
        fill: "#000",
        width: 22,
        height: 22,
        left: x,
        top: y
    };
  
    return (
        <div style={markerStyle} >
            <Bike longitude={longitude} latitude={latitude} />
        {/* ({longitude}, {latitude}) */}
      </div>
    );
}
  
export default CustomMarker