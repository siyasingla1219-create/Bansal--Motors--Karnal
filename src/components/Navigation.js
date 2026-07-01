import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/vehicles">Our Vehicles</Link>
      <Link to="/employee">Our Team</Link>
      <Link to="/roadways-team">Roadways Team</Link>
      <Link to="/outlets">Outlets</Link>
      <Link to="/workshop">Workshop</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/loan">Loan</Link>
      <Link to="/location">Location</Link>

      <a href="tel:9812999358">📞 Call: 98129 99358</a>




    </nav>
  );
}

export default Navigation;

