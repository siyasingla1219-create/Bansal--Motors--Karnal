import React from 'react';
import './Home.css';
import { companyInfo, companyStats, partners, services, products, busSegment } from '../data/company';

function Home() {
  return (
    <div>
      <div className="hero-banner">
        <img
          src="/images/eicher-showroom.jpeg"
          alt="Bansal Motors Eicher Showroom"
        />
      </div>

      <div className="container">

        <div className="grid">
          <div className="card">
            <h3>Company Information</h3>
            <p><strong>Registered:</strong> {companyInfo.established}</p>
            <p><strong>Partner:</strong> {companyInfo.partner}</p>
            <p><strong>Location:</strong> {companyInfo.location}</p>
          </div>

          <div className="card">
            <h3>Full Address</h3>
            <p>{companyInfo.fullAddress}</p>
          </div>

          <div className="card">
            <h3>About Us</h3>
            <p>Bansal Motors has gained immense expertise in supplying and trading of Commercial Vehicles.</p>
            <ul>
              {services.map((service, idx) => (
                <li key={idx}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h3>Major Products</h3>
            <ul>
              {products.map((product, idx) => (
                <li key={idx}><strong>{product.name}</strong> - {product.description}</li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h3>Bus Segment</h3>
            <p><strong>{busSegment.schoolBuses}</strong> School Buses</p>
            <p><strong>{busSegment.touristBuses}</strong> Tourist Buses</p>
            <p>{busSegment.description}</p>
          </div>

          <div className="card">
            <h3>Partners</h3>
            {partners.map((partner, idx) => (
              <p key={idx}>{partner}</p>
            ))}
          </div>
        </div>
      </div>

      <section className="highlight">
        <h2>Why Choose Bansal Motors?</h2>
        <p>23+ Years of Trust in Commercial Vehicle Industry</p>
        <div className="stats">
          {companyStats.map((stat, idx) => (
            <div key={idx} className="stat">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;