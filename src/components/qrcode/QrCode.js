import { useState, useEffect } from 'react'
import QRCode from 'qrcode'
import './QrCode.css'

const QrCode = ({ text }) => {
    
    const [qrSrc, setQrSrc] = useState('')

    useEffect(() => {
        QRCode.toDataURL(text).then((data) => {
            setQrSrc(data)
        })
    }, [])

    return (
        <div className="qrcode">
            <img src={qrSrc} alt="" />
           {/*  {text} */} <br />
            <span className="ticket-id">Biljett-ID: 345678 5644</span>
            <div className="ticket-time">
            {new Date().toLocaleString([], {timeStyle: 'short'}) + ''}
            </div>
            
            </div>
     );
}
 
export default QrCode;
