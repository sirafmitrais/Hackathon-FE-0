import { Link, Route, Switch } from 'react-router-dom';
import './style.css'
import Truck from './Truck';
import Driver from './Drivers'
import AssignedShipment from './AssignedShipment'

const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          Kargo App
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/truck"} className="nav-link">
              Truck
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/driver"} className="nav-link">
              Driver
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/shipment"} className="nav-link">
              Shipment
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Switch>
         
          <Route exact path="/driver">
            <Driver/>
          </Route>
          <Route path="/shipment">
            <AssignedShipment/>
          </Route>
          <Route path="/">
            <Truck/>
          </Route>
        </Switch>
      </div>
    </div>
    
  );
};





export default Header;
