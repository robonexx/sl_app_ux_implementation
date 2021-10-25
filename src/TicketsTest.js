import React from 'react';
import Ticketos from './Ticketos';


const TicketsTest = ({ticketTypes}) => {

    return (
        <div>
            {ticketTypes.map((tickettype) => (
                <Ticketos key={tickettype.id} tickettype={tickettype}></Ticketos>
            ))}
        </div>
     );
}
 
export default TicketsTest;