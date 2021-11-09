import { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import './QrCode.css';

const QrCode = ({ text }) => {
  const [qrSrc, setQrSrc] = useState('');

  useEffect(() => {
    QRCode.toDataURL(text).then((data) => {
      setQrSrc(data);
    });
  }, [text]);

  return (
    <div className='qrcode'>
      <img src={qrSrc} alt='qr-code' />
      {/*  {text} */} <br />
      <span className='ticket-id'>Biljett-ID: 345678 5644</span>
      <div className='ticket-time'>{new Date().toLocaleString()}</div>
    </div>
  );
};

export default QrCode;
