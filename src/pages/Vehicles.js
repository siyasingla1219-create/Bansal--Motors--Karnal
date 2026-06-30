import React from 'react';
import './Vehicles.css';
import VehicleCard from '../components/VehicleCard';
import { vehicles } from '../data/vehicles';

function Vehicles() {
  return (
    <div className="vehicles-container">
      <div className="page-title">
        <h2>Our Vehicle Range</h2>
        <p>For First Time Users, Transport Customers & Small Business Owners</p>
      </div>

      {/* School & Tourist Buses */}
      <div className="category">
        <h3>School & Tourist Buses</h3>
        <p>
          <strong>90% School Segment</strong> - Trusted by 100+ schools across Haryana
        </p>

        <div className="category-banner">
          <img src="/images/buses-banner.jpg" alt="Buses banner" />
        </div>

        <div className="vehicle-grid">
          {vehicles?.buses?.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>

      {/* Light Commercial Vehicles */}
      <div className="category">
        <h3>Light Commercial Vehicles (LCV)</h3>
        <p>
          <strong>Focus Customers:</strong> First Time Users, Transport, Small Business Owners
        </p>

        <div className="category-banner">
          <img src="/images/lcv-banner.jpg" alt="LCV banner" />
        </div>

        <div className="vehicle-grid">
          {vehicles?.lcv?.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>

      {/* Heavy Duty Trucks */}
      <div className="category">
        <h3>Heavy Duty (HD) Trucks</h3>
        <p>
          <strong>By Order Only:</strong> Because of High Investment Amount
        </p>

        <div className="category-banner">
          <img src="/images/hd-banner.jpg" alt="HD banner" />
        </div>

        <div className="vehicle-grid">
          {vehicles?.heavyDuty?.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Vehicles;