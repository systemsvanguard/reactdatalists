// src/components/SiteNavBar
import React from 'react';
import { Link } from "@reach/router";

function SiteNavBar() {
  return (
    <div className="navbar">
      <nav className="nav" id="nav">
        <div className="w3-bar w3-blue">
          <Link to="/" className="w3-bar-item w3-button w3-indigo"><i className="fas fa-home"> Home</i></Link>
          <Link to="/arraylist" className="w3-bar-item w3-button w3-hide-small"><i className="fas fa-server"> Array </i></Link>
          <Link to="/filelist" className="w3-bar-item w3-button w3-hide-small"><i className="fas fa-file-alt"> File</i></Link>
          <Link to="/apilist" className="w3-bar-item w3-button w3-hide-small"><i className="fas fa-database"> API</i></Link>
          <Link to="/datatable" className="w3-bar-item w3-button w3-hide-small"><i className="fas fa-table"> Data Table</i></Link>

          <Link to="/fruits" className="w3-bar-item w3-button w3-hide-small"><i className="fas fa-shopping-basket"> Fruits</i></Link>
          <Link to="/contact" className="w3-bar-item w3-button w3-hide-small w3-right w3-black"><i className="fas fa-envelope"> Contact</i></Link>

          <Link to="javascript:void(0)" className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onclick="myFunction()">&#9776;</Link>
        </div>

        <div id="demo" className="w3-bar-block w3-sand w3-hide w3-hide-large w3-hide-medium">
          <Link to="/arraylist" className="w3-bar-item w3-button"><i className="fas fa-server"> Array </i></Link>
          <Link to="/filelist" className="w3-bar-item w3-button"><i className="fas fa-file-alt"> File</i></Link>
          <Link to="/apilist" className="w3-bar-item w3-button"><i className="fas fa-database"> API</i></Link>
          <Link to="/datatable" className="w3-bar-item w3-button"><i className="fas fa-table"> Data Table</i></Link>
          <Link to="/fruits" className="w3-bar-item w3-button"><i className="fas fa-shopping-basket"> Fruits</i></Link>
          <Link to="/contact" className="w3-bar-item w3-button w3-black"><i className="fas fa-envelope"> Contact</i></Link>
        </div>
      </nav>
    </div>
  )
}

export default SiteNavBar;