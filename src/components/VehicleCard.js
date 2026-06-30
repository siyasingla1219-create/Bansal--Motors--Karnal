import React from 'react';
import './VehicleCard.css';
import { companyInfo } from '../data/company';

function VehicleCard({ vehicle }) {
  return (
    <div className="vehicle-card">
      <div className="tag">{vehicle.model}</div>

      <div className="vehicle-image-wrap">
        {vehicle.imageUrl ? (
          <>
            <img
              className="vehicle-image"
              src={vehicle.imageUrl}
              alt={vehicle.model}
              loading="lazy"
              onLoad={(e) => {
                const fallback = e.currentTarget
                  .closest('.vehicle-image-wrap')
                  ?.querySelector('.vehicle-image-fallback');
                if (fallback) fallback.style.display = 'none';
              }}
              onError={(e) => {
              
              e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget
                  .closest('.vehicle-image-wrap')
                  ?.querySelector('.vehicle-image-fallback');
                if (fallback) fallback.style.display = 'block';
              }}
            />

            
          </>
        ) : null}
      </div>

      <div className="vehicle-info">
        <h4>{vehicle.name}</h4>
        {vehicle.seating && <div className="seating">{vehicle.seating}</div>}
        <ul>
          {vehicle.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
        <a href={`tel:${companyInfo.phone}`} className="btn">
          Get Best Quote
        </a>
      </div>
    </div>
  );
}

export default VehicleCard;

