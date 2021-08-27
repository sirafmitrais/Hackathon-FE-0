import { Link, Route, Switch } from 'react-router-dom';
import './style.css'

const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          Kargo App
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              Truck
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
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
          <Route exact path={["/", "/tutorials"]}  />
          <Route exact path="/add" />
          <Route path="/tutorials/:id"  />
        </Switch>
      </div>
    </div>
    
  );
};





export default Header;
