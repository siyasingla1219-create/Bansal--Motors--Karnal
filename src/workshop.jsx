import './Workshop.css'

export default function Workshop() {
  return (
    <div className="workshop-container">
      <h1 className="workshop-title">Bansal Motors Workshop</h1>
      
      <p className="workshop-intro">
       Trust Eicher trucks  authorized service and repair in Bansal Motors Workshop. 
         With  Expert mechanics and genuine parts .
      </p>
      
      <div className="workshop-card">
        <h2>Hamari Services:</h2>
        <ul className="service-list">
          <li>✅ Periodic Maintenance Service</li>
          <li>✅ Engine Overhauling</li>
          <li>✅ Genuine Eicher Spare Parts</li>
          <li>✅ 24x7 Roadside Assistance</li>
          <li>✅ Denting & Painting</li>
          <li>✅ Wheel Alignment & Balancing</li>
        </ul>
      </div>

      <div className="workshop-grid">
        <div className="workshop-card">
          <h2>Workshop Timing:</h2>
          <p><strong>Mon - Sat:</strong> 9:00 AM to 6:30 PM</p>
          <p><strong>Sunday:</strong> Closed</p>
        </div>

        <div className="workshop-card cta-card">
          <h2>Book Service Now:</h2>
          <p className="phone">📞 +91-9812999358</p>
          <a href="tel:+919812999358" className="call-btn">Call Now</a>
          <a href="https://wa.me/919812999358" className="whatsapp-btn">WhatsApp</a>
        </div>
      </div>
    </div>
  )
}