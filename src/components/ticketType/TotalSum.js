import React, { useState, } from 'react'

import './tickettype.css'


const TotalSum = ({ value, count }) => {
    const [sum, setSum] = useState(0)

    let price = value

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