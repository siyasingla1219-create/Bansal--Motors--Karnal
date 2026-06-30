import React from 'react';
import './Location.css';

function Location() {
  return (
    <div className="location-container">
      <div className="page-title">
        <h2>Our Location</h2>
        <p>Find us at Bansal Motors Karnal</p>
      </div>

      <div className="location-content">
        <div className="location-card">
          <h3>Karnal Branch</h3>
          <p className="location-address">
            <strong>Address:</strong> G.T. Madanpur Road Opposite Near Neelkhant Dhaba, Karnal, Haryana-132001
          </p>
          <p className="location-phone">
            <strong>Phone:</strong>{' '}
            <a href="tel:9812999358" className="phone-link">9812999358</a>
          </p>
          <p className="location-timing">
            <strong>Timing:</strong> Mon-Sat: 9:30 AM - 6:30 PM
          </p>
        </div>

        <div className="location-map">
          <iframe
            title="Bansal Motors Karnal Map"
            src="https://www.google.com/maps?q=G.T.%20Madanpur%20Road%20Opposite%20Near%20Neelkhant%20Dhaba%2C%20Karnal%2C%20Haryana-132001&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Location;

