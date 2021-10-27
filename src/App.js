import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/nav/Nav'
import TicketsPage from './pages/ticketspage/TicketsPage'
import ConfirmPage from './pages/confirmpage/ConfirmPage';
import ShowTicket from './pages/showTicket/ShowTicket';
import TravelMap from './pages/travelMap/TravelMap';
import BookVehicle from './pages/bookvehiclepage/bookVehiclePage';
import PaymentPage from './pages/paymentpage/PaymentPage';




function App() {

  
  return (
    <>
    <div className="App">
        <div className="app-wrapper">
          <Switch>
            <Route exact path="/" component={TravelMap} />
            <Route path="/ticketspage" component={TicketsPage} />
            <Route path="/confirmpage" component={ConfirmPage} />
            <Route path="/showticket" component={ShowTicket} />
            <Route path="/bookvehicle" component={BookVehicle} />
            <Route path="/payment" component={PaymentPage} />
            </Switch>
            <Nav/>
          </div>      
      </div>
    </>
  );
}

export default App;
