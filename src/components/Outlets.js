import { useState } from 'react';
import './Outlets.css';

function Outlets() {
  const [selectedBranch, setSelectedBranch] = useState(null);

  const branches = [
    {
      id: 1,
      name: "Sonipat Branch",
      city: "Sonipat",
      address: "Khewat No. 402, Khata No. 435 Sonipat G.T. Road, Village Joshi Chauhan,Tikola, Sonipat, Haryana-131207",
      phone: "9812999341",
      owner: "Parveen Bansal",
      timing: "Mon-Sat: 9:30 AM - 6:30 PM",
      pic: "/images/sonipat outlet.jpg",
      vehicles: [                                                                                                    
        { model: "Eicher Pro 3015", type: "Truck", img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=300" },
        { model: "Eicher Skyline Bus", type: "Bus", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=300" },
        { model: "Eicher  Pro 2059", type: "LCV", img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=300" }
      ],
      about: "Sonipat branch Haryana-Delhi border pe located hai. Yahan sales, service aur spare parts sab available hain. 24x7 roadside assistance bhi milti hai."
    },
    {
      id: 2,
      name: "Karnal Branch", 
      city: "Karnal",
      address: "G.T.Madanpur Road Opposite Near Neelkhant Dhaba , Karnal, Haryana- 132001",
      phone: "9812999358",
      Manager: "Parveen Bansal",
      timing: "Mon-Sat: 9:30 AM - 6:30 PM",
      pic: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600",
      vehicles: [
        { model: "Eicher Pro 3019", type: "Heavy Truck", img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=300" },
        { model: "Eicher Starline Bus", type: "Bus", img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=300" },
        { model: "Eicher Pro 1110", type: "Tipper", img: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=300" }
      ],
      about: "Karnal branch GT Road pe main location hai. Eicher ki saari range available hai. Authorized service center with trained mechanics."
    },
    {
      id: 3,
      name: "Yamunanagar Branch",
      city: "Yamunanagar", 
      address: "Village Bamboli, Sarasvati Nagar Mustafa Bagh, Yamunanagar - 133103",
      phone: "98129 40700",
      owner: "Parveen Bansal",
      timing: "Mon-Sat: 10:00 AM - 6:00 PM",
      pic: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600",
      vehicles: [
        { model: "Eicher Pro 2049", type: "LCV", img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=300" },
        { model: "Eicher Skyline Pro", type: "School Bus", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=300" },
        { model: "Eicher Pro 3016", type: "Truck", img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=300" }
      ],
      about: "Yamunanagar branch Jagadhri Road pe bus stand ke samne hai. Finance facility available hai. Exchange offers bhi milte hain."
    }
  ];

  return (
    <div className="outlet-container">
      <h1>Our Branches</h1>
      <p className="subtitle">Sonipat • Karnal • Yamunanagar</p>

      {!selectedBranch && (
        <div className="branch-grid">
          {branches.map((branch) => (
            <div className="branch-card" key={branch.id} onClick={() => setSelectedBranch(branch)}>
              <img src={branch.pic} alt={branch.name} />
              <div className="branch-card-content">
                <h3>{branch.city}</h3>
                <p>📍 {branch.name}</p>
                <button className="view-btn">View Details →</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedBranch && (
        <div className="branch-detail">
          <button className="back-btn" onClick={() => setSelectedBranch(null)}>← Back</button>
          
          <div className="detail-card">
            <img src={selectedBranch.pic} alt={selectedBranch.name} className="detail-banner" />
            
            <div className="detail-content">
              <h2>{selectedBranch.city} Branch</h2>
              
              <div className="info-grid">
                <div className="info-box">
                  <strong>📍 Address</strong>
                  <p>{selectedBranch.address}</p>
                </div>
                <div className="info-box">
                  <strong>📞 Phone</strong>
                  <p>{selectedBranch.phone}</p>
                </div>
                <div className="info-box">
                  <strong>👨‍💼 Manager</strong>
                  <p>{selectedBranch.manager}</p>
                </div>
                <div className="info-box">
                  <strong>⏰ Timing</strong>
                  <p>{selectedBranch.timing}</p>
                </div>
              </div>

              <div className="about-section">
                <h4>About This Branch</h4>
                <p>{selectedBranch.about}</p>
              </div>

              <div className="vehicles-section">
                <h4>Available Vehicles</h4>
                <div className="vehicle-grid">
                  {selectedBranch.vehicles.map((vehicle, i) => (
                    <div className="vehicle-card" key={i}>
                      <img src={vehicle.img} alt={vehicle.model} />
                      <h5>{vehicle.model}</h5>
                      <span className="vehicle-type">{vehicle.type}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a href={`tel:${selectedBranch.phone}`} className="call-btn">📞 Call Now</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Outlets;