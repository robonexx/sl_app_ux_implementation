import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './ConfirmPage.css'

const ConfirmTickets = () => {
    const [count, setCount] = useState(0)
    const [sum, setSum] = useState(0)
    const [redCount, setRedCount] = useState(0)
    const [redSum, setRedSum] = useState(0)

    let fullPrice = 38
    let reducedPrice = 25
    
    const increment = () => {
        setCount(count + 1)
        setSum((count + 1) * fullPrice)
    }
    let decrement = () => {
        setCount(count - 1)
        setSum((count -1) * fullPrice)
    }
    if (count <= 0) {
        decrement = () => {
            setCount(0)
        }
        
    }
    const incrementRed = () => {
        setRedCount(redCount + 1)
        setRedSum((redCount + 1) * reducedPrice)
    }
    let decrementRed = () => {
        setRedCount(redCount - 1)
        setRedSum((redCount -1) * reducedPrice)
    }
    if (redCount <= 0) {
        decrementRed = () => {
            setRedCount(0)
        }
        
    }
    

    return (
        <div className="wrapper">
            <header className="confirm-header">
                <h1>Bekräfta</h1>
                <span>Avbryt</span>
            </header>

            <section className="confirm-top-section">
                <p>Biljetten börjar gälla direkt efter genomfört köp.</p>
            </section>

            <section className="confirm-section">
                <h3>Biljettyp</h3>
                <h3>Enkelbiljett SL</h3>
            </section>
            <section className="confirm-section">
                <h3>Antal vuxen</h3>
                <div className="buttons">
                    <button className="btn btn-minus"
                    onClick={decrement}>-</button>
                    <span>{count}</span>
                    <button className="btn btn-plus"
                    onClick={increment}>+</button>
                </div>
            </section>
            <section className="confirm-section">
                <h3>Antal rabaterat</h3>
                <div className="buttons">
                    <button className="btn btn-minus reduced"
                    onClick={decrementRed}>-</button>
                    <span>{redCount}</span>
                    <button className="btn btn-plus reduced"
                    onClick={incrementRed}>+</button>
                </div>
            </section>
            <section className="confirm-section">
                <h3>Att betala</h3>
                <h3>{sum} kr</h3>
            </section>
            
             <Link to="/payment" className="pay-btn-div">
                <button className="pay-btn">Fortsätt till betalning</button>
            </Link>
        </div>
     );
}
 
export default ConfirmTickets;