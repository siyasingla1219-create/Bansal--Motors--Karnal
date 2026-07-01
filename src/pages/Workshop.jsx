import './Workshop.css'

export default function Workshop() {
  return (
    <div className="workshop-container">
      <h1 className="workshop-title">Bansal Motors Workshop</h1>
      
      <p className="workshop-intro">
       Trust Eicher trucks authorized service and repair in Bansal Motors Workshop. 
         With Expert mechanics and genuine parts.
      </p>
      
      <div className="workshop-card">
        <h2>Our Services:</h2>
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
          <p><strong>Sunday:</strong> Open</p>
        </div>

        <div className="workshop-card cta-card">
          <h2>Book Service Now:</h2>
          <p className="phone">📞 +91-9812999358</p>
          <p className="toll-free">📞 Toll Free: 1800-201-3531</p> 
          <a href="tel:+919812999358" className="call-btn">Call Now</a>
          <a href="https://wa.me/919812999358?text=Hi, I want to book truck service" className="whatsapp-btn">WhatsApp</a>
        </div>
      </div>

      {/* Service Booking Form - AB SAHI JAGAH HAI */}
      <div className="workshop-card form-card">
        <h2>Book Your Service Online</h2>
        <form 
          name="service-booking" 
          method="POST" 
          data-netlify="true"
          className="service-form"
        >
          <input type="hidden" name="form-name" value="service-booking" />
          
          <div className="form-group">
            <label>Full Name *</label>
            <input type="text" name="name" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label>Mobile Number *</label>
            <input type="tel" name="phone" placeholder="98129XXXXX" pattern="[0-9]{10}" required />
          </div>

          <div className="form-group">
            <label>Truck Model</label>
            <input type="text" name="truck_model" placeholder="E.g. Eicher Pro 2049" />
          </div>

          <div className="form-group">
            <label>Service Type *</label>
            <select name="service_type" required>
              <option value="">Select Service</option>
              <option value="Periodic Maintenance">Periodic Maintenance</option>
              <option value="Engine Overhauling">Engine Overhauling</option>
              <option value="Denting & Painting">Denting & Painting</option>
              <option value="24x7 Roadside Assistance">24x7 Roadside Assistance</option>
              <option value="Wheel Alignment">Wheel Alignment & Balancing</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Describe Issue</label>
            <textarea name="message" placeholder="Tell us about the problem" rows="3"></textarea>
          </div>

          <button type="submit" className="submit-btn">Book Service Now</button>
        </form>
      </div>

    </div>
  )
}