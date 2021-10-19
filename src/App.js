import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
    <Router>
    <div className="App">
        <div className="app-wrapper">
          <Switch>
            <Route exact path="/" component={TravelMap} />
            <Route exact path="/ticketspage" component={TicketsPage} />
            <Route exact path="/confirmpage" component={ConfirmPage} />
            <Route exact path="/showticket" component={ShowTicket} />
            <Route exact path="/bookvehicle" component={BookVehicle} />
            <Route exact path="/payment" component={PaymentPage} />
            
            </Switch>
            <Nav/>
          </div>      
      </div>
    </Router>
  );
}

export default App;
