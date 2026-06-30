import './RoadwaysTeam.css';

function RoadwaysTeam() {
  const districtData = [
    { name: 'Karnal', count: 7 },
    { name: 'Kurukshetra', count: 4 },
    { name: 'Panipat', count: 3 },
    { name: 'Kaithal', count: 3 },
    { name: 'Yamunagar', count: 5 },
  ];

  const totalCount = districtData.reduce(
    (total, district) => total + district.count,
    0
  );

  return (
    <div className="container">
      <h1>Total Eicher Service Team only for Roadways Buses</h1>
      <p className="subtitle">Available for 24 Hours</p>

      <div className="total">
        Total Manpower: <strong>{totalCount}</strong>
      </div>

      <div className="district-grid">
        {districtData.map((district) => (
          <div className="district-card" key={district.name}>
            <h3>{district.name}</h3>
            <p className="count">
              {district.count}{' '}
              <span className="count-unit">Manpower</span>
            </p>
            <p className="label">Members</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoadwaysTeam;

