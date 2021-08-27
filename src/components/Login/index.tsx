import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import { Button } from "reactstrap";

function index() {
  return (
    <div>
        <h1>Login as User</h1>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        ></input>
        <label className="form-check-label">Transporter</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        ></input>
        <label className="form-check-label">Shipper</label>
      </div>
      <Button className="" type="submit" >Login</Button>
    </div>
  );
}

export default index;
