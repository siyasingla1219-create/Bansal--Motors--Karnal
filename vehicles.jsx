import React from 'react';

const Vehicles = () => {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Inter', sans-serif;
        }

        body {
          color: #1A1A1A;
          background: #f5f5f5;
        }

        .header {
          background: linear-gradient(90deg, #1A1A1A, #333);
          color: white;
          padding: 20px 5%;
          text-align: center;
        }

        .header h1 {
          font-size: 32px;
          letter-spacing: 1px;
        }

        .header p {
          color: #FFC107;
          font-weight: 500;
          margin-top: 5px;
        }

        .navbar {
          background: #FFC107;
          padding: 12px 5%;
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .navbar a {
          color: #1A1A1A;
          text-decoration: none;
          font-weight: 600;
        }

        .container {
          padding: 40px 5%;
        }

        .page-title {
          text-align: center;
          margin-bottom: 40px;
        }

        .page-title h2 {
          font-size: 36px;
          color: #1A1A1A;
        }

        .page-title p {
          color: #555;
          margin-top: 10px;
        }

        .category {
          margin-bottom: 50px;
        }

        .category h3 {
          font-size: 28px;
          color: #1A1A1A;
          margin-bottom: 10px;
          border-left: 4px solid #FFC107;
          padding-left: 15px;
        }

        .category p {
          color: #555;
          margin-bottom: 25px;
        }

        .vehicle-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
        }

        .vehicle-card {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          border-top: 3px solid #FFC107;
        }

        .vehicle-card .tag {
          background: #1A1A1A;
          color: #FFC107;
          padding: 8px 15px;
          font-size: 14px;
          font-weight: 700;
        }

        .vehicle-info {
          padding: 20px;
        }

        .vehicle-info h4 {
          font-size: 20px;
          margin-bottom: 12px;
        }

        .vehicle-info .price {
          color: #FFC107;
          font-weight: 700;
          font-size: 18px;
          margin-bottom: 12px;
        }

        .vehicle-info ul {
          padding-left: 18px;
        }

        .vehicle-info li {
          color: #555;
          margin: 6px 0;
          list-style: none;
        }

        .vehicle-info li::before {
          content: "✓ ";
          color: #28a745;
          font-weight: bold;
        }

        .btn {
          background: #1A1A1A;
          color: #FFC107;
          padding: 12px;
          border: none;
          border-radius: 6px;
          font-weight: 700;
          cursor: pointer;
          width: 100%;
          text-decoration: none;
          display: block;
          text-align: center;
          margin-top: 15px;
        }

        .btn:hover {
          background: #333;
        }

        .footer {
          background: #1A1A1A;
          color: #999;
          text-align: center;
          padding: 20px;
          font-size: 14px;
          margin-top: 40px;
        }

        @media (max-width: 768px) {
          .header h1 {
            font-size: 24px;
          }

          .page-title h2 {
            font-size: 28px;
          }
        }
      `}</style>

      <header className="header">
        <h1>BANSAL MOTORS</h1>
        <p>Authorised Commercial Vehicle Dealer | Est. 2002</p>
      </header>

      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/vehicles">Our Vehicles</a>
        <a href="tel:9812999358">📞 Call: 98129 99358</a>
        <a href="/staff">Staff</a>
      </nav>

      <div className="container">
        <div className="page-title">
          <h2>Our Vehicle Range</h2>
          <p>For First Time Users, Transport Customers & Small Business Owners</p>
        </div>

        {/* School & Tourist Buses */}
        <div className="category">
          <h3>School & Tourist Buses</h3>
          <p><strong>90% School Segment</strong> - Trusted by Schools Pan India</p>
          <p><strong>GPS is only for the customers</strong></p>
          <p><strong>VLTD Compulsory for Buses in RTO authorization </strong></p>
          
          <img src="/images/buses-banner.jpg" alt="Eicher School & Tourist Bus Range" style={{width:'100%', margin:'20px 0 30px 0', borderRadius:'10px', boxShadow:'0 4px 15px rgba(0,0,0,0.15)'}} />
          
          <div className="vehicle-grid">

            <div className="vehicle-card">
              <div className="tag">MODEL 2050-C</div>
              <div className="vehicle-info">
                <h4>20.50 Series - 21 Seater</h4>
                <div className="price">19+1+1 Seater</div>
                <ul>
                  <li>BS6 Engine with GPS Tracking</li>
                  <li>CCTV Camera + Fire Extinguisher</li>
                  <li>Comfortable Pushback Seats</li>
                  <li>Finance & Insurance Available</li>
                </ul>
                <a href="tel:9812999358" className="btn">Get Best Quote</a>
              </div>
            </div>

            <div className="vehicle-card">
              <div className="tag">MODEL 2075-D</div>
              <div className="vehicle-info">
                <h4>20.75 Series - 26 Seater</h4>
                <div className="price">24+1+1 Seater</div>
                <ul>
                  <li>Wide Body, More Leg Space</li>
                  <li>High Roof for Comfort</li>
                  <li>BS6 Power Engine</li>
                  <li>Best for School/Staff</li>
                </ul>
                <a href="tel:9812999358" className="btn">Get Best Quote</a>
              </div>
            </div>

            <div className="vehicle-card">
              <div className="tag">MODEL 2065-E</div>
              <div className="vehicle-info">
                <h4>20.65 Series - 36 Seater</h4>
                <div className="price">34+1+1 Seater</div>
                <ul>
                  <li>Mid Size Bus, Low Maintenance</li>
                  <li>Best Mileage in Segment</li>
                  <li>School + Tourist Permit</li>
                  <li>Strong Build Quality</li>
                </ul>
                <a href="tel:9812999358" className="btn">Get Best Quote</a>
              </div>
            </div>

          </div>
        </div>

        {/* LCV */}
        <div className="category">
          <h3>Light Commercial Vehicles (LCV)</h3>
          <p><strong>Focus Customers:</strong> First Time Users, Transport, Small Business Owners</p>
          <p><strong>VLTD is only applied for National Permittes</strong></p>
          
          <img src="/images/lcv-banner.jpg" alt="Eicher LCV Range" style={{width:'100%', margin:'20px 0 30px 0', borderRadius:'10px', boxShadow:'0 4px 15px rgba(0,0,0,0.15)'}} />
          
          <div className="vehicle-grid">
            
            <div className="vehicle-card">
              <div className="tag">MODEL 2049</div>
              <div className="vehicle-info">
                <h4>Smaller Commercial Vehicle</h4>
                <ul>
                  <li>Best for First Time Users</li>
                  <li>Compact & Easy to Drive</li>
                  <li>Low Maintenance Cost</li>
                  <li>High Fuel Efficiency</li>
                  <li>GVW-4995</li>
                </ul>
                <a href="tel:9812999358" className="btn">Enquire Now</a>
              </div>
            </div>

            <div className="vehicle-card">
              <div className="tag">MODEL 2059XP</div>
              <div className="vehicle-info">
                <h4>Diesel / CNG Variant</h4>
                <ul>
                  <li>Diesel & CNG Fuel Options</li>
                  <li>1-2 Ton Payload Capacity</li>
                  <li>Best for Goods Transport</li>
                  <li>Strong ROI for Business</li>
                  <li>GVW-7490</li>
                </ul>
                <a href="tel:9812999358" className="btn">Enquire Now</a>
              </div>
            </div>

            <div className="vehicle-card">
              <div className="tag">MODEL 2110</div>
              <div className="vehicle-info">
                <h4>11.10 Series LCV</h4>
                <ul>
                  <li>Higher Load Capacity</li>
                  <li>Strong Build for Rough Roads</li>
                  <li>Most Selling Model</li>
                  <li>Easy Finance Available</li>
                  <li>GVW-11990</li>
                </ul>
                <a href="tel:9812999358" className="btn">Enquire Now</a>
              </div>
            </div>

          </div>
        </div>

        {/* Heavy Duty Trucks */}
        <div className="category">
          <h3>Heavy Duty (HD) Trucks</h3>
          <p><strong>By Order Only:</strong> Because of High Investment Amount</p>
          <p><strong>GPS is only for the customers</strong></p>
          
          <img src="/images/hd-banner.jpg" alt="Eicher HD Truck Range" style={{width:'100%', margin:'20px 0 30px 0', borderRadius:'10px', boxShadow:'0 4px 15px rgba(0,0,0,0.15)'}} />
          
          <div className="vehicle-grid">

            <div className="vehicle-card">
              <div className="tag">MODEL 6055</div>
              <div className="vehicle-info">
                <h4>60.55 Series - Tractor Trailer</h4>
                <ul>
                  <li>Heavy Duty 6X4 Drive</li>
                  <li>Best for Container/ODC</li>
                  <li>High Torque BS6 Engine</li>
                  <li>Pan India Permit Support</li>
                  <li>GVW-55000</li>
                </ul>
                <a href="tel:9812999358" className="btn">Enquire Now</a>
              </div>
            </div>

            <div className="vehicle-card">
              <div className="tag">MODEL 6048</div>
              <div className="vehicle-info">
                <h4>60.48 Series - Tractor Trailer</h4>
                <ul>
                  <li>Best Mileage in Segment</li>
                  <li>Ideal for 40ft Container</li>
                  <li>BS6 Power Engine</li>
                  <li>Low Maintenance Cost</li>
                  <li>GVW-47500</li>
                </ul>
                <a href="tel:9812999358" className="btn">Enquire Now</a>
              </div>
            </div>

          </div>
        </div>

      </div>

      <footer className="footer">
        © 2026 Bansal Motors | G.T. Madanpur Road, Karnal | Call: 98129 99358
      </footer>
    </>
  );
};

export default Vehicles;