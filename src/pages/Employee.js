import React from 'react';
import './employee.css';

function getDepartmentCounts() {
  const employees = [
    ...Array(13).fill({ department: 'Accounts Department' }),
    ...Array(25).fill({ department: 'Service Department' }),
    ...Array(7).fill({ department: 'Backend Team Staff' }),
    ...Array(3).fill({ department: 'Store Service Department' }),
    ...Array(3).fill({ department: 'Driver' }),
    ...Array(4).fill({ department: 'housekeeper' }),
    ...Array(15).fill({ department: 'Accidental Staff' }),
    ...Array(5).fill({ department: 'New Vehicle Pre Delievery Inspection Department' }),
    ...Array(3).fill({ department: 'Breakdown Department' }),
    
  ];

  const depCount = employees.reduce((acc, emp) => {
    acc[emp.department] = (acc[emp.department] || 0) + 1;
    return acc;
  }, {});

  return { total: employees.length, depCount };
}

export default function Employee() {
  const { total, depCount } = getDepartmentCounts();
  const departments = Object.entries(depCount);

  return (
    <div className="container">
      <h1>Our Team Strength</h1>
      <div className="total">
        Total Employee: {total} <strong id="totalcount">{total}</strong>
      </div>

      <div className="dept-grid" id="deptgrid">
        {departments.map(([dept, count]) => (
          <div key={dept} className="dept-card">
            <h3>{dept}</h3>
            <p className="count">{count}</p>
            <p className="label">Members</p>
          </div>
        ))}
      </div>
    </div>
  );
}

