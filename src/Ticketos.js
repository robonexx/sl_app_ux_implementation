import React from 'react'

export default function Ticketos({tickettype}) {

    
    return (
        <div style={{color: "white", fontSize: "1rem"}}>
            <h3>{tickettype.name}</h3>
            <span>{tickettype.price} kr</span>

            <button>+</button>
        </div>
    )
}
