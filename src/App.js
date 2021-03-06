import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/nav/Nav';
import TicketsPage from './pages/Ticketspage/TicketsPage';
import ConfirmPage from './pages/Confirmpage/ConfirmPage';
import ShowTicket from './pages/showTicket/ShowTicket';
import Homepage from './pages/Homepage/Homepage';
import BookVehicle from './pages/Bookvehiclepage/BookVehiclePage';
import PaymentPage from './pages/Paymentpage/PaymentPage';
import BikeridePage from './pages/Bikeridepage/BikeridePage'
import TheEnd from './pages/TheEnd/TheEnd';
// extra stufff
import LoadingSl from './components/Loading/LoadingSl';
import SlCard from './components/slCard/SlCard';
import ReceiptsPage from './pages/ReceiptsPage/ReceiptsPage';

// styling
import './App.css';
import { motion } from 'framer-motion';

const appLoadVariants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 4.2,
      duration: 0.6,
    },
  },
};

function App({ isValid, setIsValid, total, setTotal }) {
  const [loading, setLoading] = useState(true);

  console.log('If you get messages in the console saying true, clear your localstorage')

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      <div className='App'>
        {loading ? (
          <div className='app-wrapper'>
            <LoadingSl loading={loading} setLoading={setLoading} />
          </div>
        ) : (
          <motion.div
            className='app-wrapper'
            variants={appLoadVariants}
            initial='hidden'
            animate='visible'
          >
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route path='/ticketspage'>
                <TicketsPage isValid={isValid} />
              </Route>
              <Route path='/confirmpage'>
                <ConfirmPage total={total} setTotal={setTotal} />
              </Route>
              <Route path='/showticket' component={ShowTicket} />
              <Route path='/bookvehicle' component={BookVehicle} />
              <Route path='/payment'>
                <PaymentPage
                  isValid={isValid}
                  setIsValid={setIsValid}
                  total={total}
                />
              </Route>
              <Route path='/receipts' component={ReceiptsPage} />
              <Route path='/slcard' component={SlCard} />
              <Route path='/bikeridepage' component={BikeridePage} />
              <Route path='/end' component={TheEnd} />
            </Switch>
            <Nav />
          </motion.div>
        )}
      </div>
    </>
  );
}

export default App;
