import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/nav/Nav';
import TicketsPage from './pages/ticketspage/TicketsPage';
import ConfirmPage from './pages/confirmpage/ConfirmPage';
import ShowTicket from './pages/showTicket/ShowTicket';
import TravelMap from './pages/travelMap/TravelMap';
import BookVehicle from './pages/bookvehiclepage/BookVehiclePage';
import PaymentPage from './pages/paymentpage/PaymentPage';
import { motion } from 'framer-motion';
import Loading from './components/loading/Loading';

import SlCard from './components/slCard/SlCard';

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

function App({ isValid, setIsValid }) {
  const [loading, setLoading] = useState(true);

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
            <Loading loading={loading} setLoading={setLoading} />
          </div>
        ) : (
          <motion.div
            className='app-wrapper'
            variants={appLoadVariants}
            initial='hidden'
            animate='visible'
          >
            <Switch>
              <Route exact path='/' component={TravelMap} />
              <Route path='/ticketspage'>
                <TicketsPage isValid={isValid} />
              </Route>
              <Route path='/confirmpage' component={ConfirmPage} />
              <Route path='/showticket' component={ShowTicket} />
              <Route path='/bookvehicle' component={BookVehicle} />
              <Route path='/payment'>
                <PaymentPage isValid={isValid} setIsValid={setIsValid} />
              </Route>
              <Route path='/slcard' component={SlCard} />
            </Switch>
            <Nav />
          </motion.div>
        )}
      </div>
    </>
  );
}

export default App;
