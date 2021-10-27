import React, {useReducer, useState} from 'react';
import './slcard.css'
import Img from '../../content/sl.png'


const SlCard = () => {
    
   

    return (
        <div className="card-wrapper">
            <div className="cardContent">
                <img src={Img} alt="" />
            {/* <h2 className="cardTitle">SL KORT</h2>
            <h3 className="cardSubtitle">GILTIG 30 DAGAR</h3>
            <p className="cardArea">STOCKHOLMS LOKALTRAFIK</p> */}
        </div>
      </div>
     );
}
 
export default SlCard;

