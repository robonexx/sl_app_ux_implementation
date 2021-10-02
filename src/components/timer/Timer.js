import React, { useState, useEffect } from 'react';


function convertTime(sec) {
    var hours = Math.floor(sec/3600);
    (hours >= 1) ? sec = sec - (hours*3600) : hours = '00';
    var min = Math.floor(sec/60);
    (min >= 1) ? sec = sec - (min*60) : min = '00';
   

    (min.toString().length == 1) ? min = '0'+min : void 0;    
        

    return hours+'h '+min + 'min';
}


const Timer = ({ seconds }) => {
    
    const [timeLeft, setTimeLeft] = useState(seconds)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft((t) => t - 1)
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])
    
    return (
        <>
            <div>
                {convertTime(timeLeft)}
            </div>
        </>
    );
}
 
export default Timer;