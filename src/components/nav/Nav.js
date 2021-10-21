import React from 'react';
import './nav.css'
import { Link } from 'react-router-dom'
import Journey from '../ui/icons/Journey'
import Tickets from '../ui/icons/Tickets'
import More from '../ui/icons/More'

const Nav = () => {
    return (
        <div className="nav">
            <ul>
                <Link to="/" className="links">
                    <Journey className="icons" />
                    Resa
                </Link>
                <Link to="/ticketspage"
                className="links">
                    <Tickets className="icons" />
                    Biljetter
                </Link>
                <Link to="more"
                className="links">
                    <More className="icons" />
                    Mer
                </Link>
            </ul>
        </div>
     );
}
 
export default Nav;