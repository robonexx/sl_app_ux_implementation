import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import Loading from '../loading/Loading';

// styles
import './ReceiptsList.css';

export default function ReceiptList() {
  const [url, setUrl] = useState('http://localhost:3000/tickets');
  const { data: tickets, isLoading, error } = useFetch(url);

  return (
    <div className='receipt-list'>
      <h2>Köphistorik & kvitton</h2>

      {isLoading && <Loading />}
      {error && (
        <div>
          <p>Could not fetch data</p>
          <p>Need to start a local json-server</p>
        </div>
      )}
      <ul>
        {tickets &&
          tickets.map((ticket) => (
            <li key={ticket.id}>
              <h3>Biljett typ: {ticket.type}</h3>
              <span>Pris: {ticket.price}</span>
              <span>Bilj id: {ticket.id}</span>
              <span>Datum: {ticket.date}</span>
            </li>
          ))}
      </ul>

      <div className='filters'>
        <button
          onClick={() => setUrl('http://localhost:3000/tickets?type=vuxen')}
        >
          Biljetter vuxen
        </button>
        <button
          onClick={() =>
            setUrl('http://localhost:3000/tickets?type=rabatterat')
          }
        >
          Biljetter rabatterat
        </button>
        <button onClick={() => setUrl('http://localhost:3000/tickets')}>
          Alla biljetter
        </button>
      </div>
    </div>
  );
}
