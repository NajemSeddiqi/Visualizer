import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as SVGLoaders from 'svg-loaders-react';
import httpService from '../services/httpService';
import { getChallenges } from '../services/challengeService';
import { get } from 'jquery';

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <div className="frostbolt-nav">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <NavLink to="/home" className="nav-link">
                    Problems<span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
