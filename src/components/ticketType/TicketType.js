import React, { useState } from 'react'
import PropTypes from 'prop-types';
import './tickettype.css'
import TotalSum from './TotalSum';



const TicketType = ({ ticketType, value }) => {
    const [count, setCount] = useState(0)
    const [sum, setSum] = useState(0)


    let price = value

    const increment = () => {
        setCount(count + 1)
        setSum((count + 1) * price)

    }
    let decrement = () => {
        setCount(count - 1)
        setSum((count -1) * price)
    }
    if (count <= 0) {
        decrement = () => {
            setCount(0)
        }
        
    }

    


    return (
        <>

    <section className="confirm-section">
                <h3>{ticketType}</h3>
                <div className="buttons">
                    <button className="btn btn-minus"
                    onClick={decrement}>-</button>
                    <span>{count}</span>
                    <button className="btn btn-plus"
                    onClick={increment}>+</button>
                </div>
            </section>
            {/* <section className="confirm-section">
                <h3>Att betala</h3>
                <h3>{sum}kr</h3>
            </section> */}
        </>
    );
}

TicketType.defaultProps = {
    ticketType: 'Antal vuxen',
    value: 38
};

TicketType.propTypes = {
    ticketType: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
}
 
export default TicketType;