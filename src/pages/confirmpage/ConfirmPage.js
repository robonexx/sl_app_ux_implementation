import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ConfirmPage.css';
/* import TicketType from '../../components/ticketType/TicketType';
import TotalSum from '../../components/ticketType/TotalSum'; */
import LeftArrow from '../../components/ui/icons/LeftArrow';


const ConfirmPage = () => {

  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)

 
  const items = [
        {
            id: '1',
            name: 'vuxen',
            price: 38
        },
       /*  {
            id: '2',
            name: 'rabatterat',
            price: 25
        } */

  ]
  
  const price = 38
  
  const increment = () => {
    setCount(count + 1);
    setTotal((count + 1) * price);
  };
  let decrement = () => {
    setCount(count - 1);
    setTotal((count - 1) * price);
  };
  if (count <= 0) {
    decrement = () => {
      setCount(0);
    };
  }

const ticketItems = items.map((el) => (
  <div key={el.id}>
    <section className='confirm-section'>
      <h3>Antal {el.name}{/*  {el.price} */} </h3>
        <div className='buttons'>
          <button className='btn btn-minus' onClick={() => setCount(decrement)}>
            -
          </button>
          <span>{count}</span>
          <button className='btn btn-plus' onClick={() => setCount(increment)}>
            +
          </button>
        </div>
      </section>
  </div>
  
))

  
  return (
    <div className='confirm-wrapper'>
      <header className='confirm-header'>
        <Link to='/ticketspage'>
          <span>
            <LeftArrow />
          </span>
        </Link>
        <h1>Bekräfta</h1>
      </header>

      <section className='confirm-top-section'>
        <p>Biljetten börjar gälla direkt efter genomfört köp.</p>
      </section>

      <section className='confirm-section'>
        <h3>Biljettyp</h3>
        <h3>Enkelbiljett SL</h3>
      </section>
      <div>{ticketItems}</div>

      <section className='confirm-section'>
        <h3>Antal rabaterat</h3>
        <div className='buttons'>
          <button className='btn btn-minus reduced' /* onClick={decrement} */>
            -
          </button>
          <span>0</span>
          <button className='btn btn-plus reduced' /* onClick={increment} */>
            +
          </button>
        </div>
      </section>
     
      <section className='confirm-section'>
        <h3>Att betala</h3>
        <h3>{total} kr</h3>
      </section>
     

      <Link to='/payment'>
        <button className='confirm-btn'>Fortsätt till betalning</button>
      </Link>
    </div>
  );
};

export default ConfirmPage;


/* 
 const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0);

  let price = 38;

  const increment = () => {
    setCount(count + 1);
    setSum((count + 1) * price);
  };
  let decrement = () => {
    setCount(count - 1);
    setSum((count - 1) * price);
  };
  if (count <= 0) {
    decrement = () => {
      setCount(0);
    };
  }
  return (
    <div className='confirm-wrapper'>
      <header className='confirm-header'>
        <Link to='/ticketspage'>
          <span>
            <LeftArrow />
          </span>
        </Link>
        <h1>Bekräfta</h1>
      </header>

      <section className='confirm-top-section'>
        <p>Biljetten börjar gälla direkt efter genomfört köp.</p>
      </section>

      <section className='confirm-section'>
        <h3>Biljettyp</h3>
        <h3>Enkelbiljett SL</h3>
      </section>

      <section className='confirm-section'>
        <h3>Antal vuxen</h3>
        <div className='buttons'>
          <button className='btn btn-minus' onClick={decrement}>
            -
          </button>
          <span>{count}</span>
          <button className='btn btn-plus' onClick={increment}>
            +
          </button>
        </div>
      </section>
      <section className='confirm-section'>
        <h3>Antal rabaterat</h3>
        <div className='buttons'>
          <button className='btn btn-minus reduced' onClick={decrement}>
            -
          </button>
          <span>{count}</span>
          <button className='btn btn-plus reduced' onClick={increment}>
            +
          </button>
        </div>
      </section>
      <section className='confirm-section'>
        <h3>Att betala</h3>
        <h3>{sum} kr</h3>
      </section>
    
      <Link to='/payment'>
        <button className='confirm-btn'>Fortsätt till betalning</button>
      </Link>
    </div>
  );
};

*/