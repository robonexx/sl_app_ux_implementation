import React, { useState, useEffect } from 'react'

import './tickettype.css'


const TotalSum = ({ sum }) => {



    return (
        <>
            <section className="confirm-section">
                <h3>Att betala</h3>
                <h3>{sum} kr</h3>
            </section>
        </>
    );
}
 
export default TotalSum;