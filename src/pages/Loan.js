import React, { useState, useEffect } from 'react';
import './Loan.css';

function Loan() {
  const [loanType, setLoanType] = useState('');
  const [showForm, setShowForm] = useState(false); // false | 'form' | 'emiCalculator'
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    model: '',
    pancard: '',
    aadhar: '',
  });

  const [principal, setPrincipal] = useState(695000);
  const [rate, setRate] = useState(9.5);
  const [tenure, setTenure] = useState(4);
  const [emiDetails, setEmiDetails] = useState(null);

  useEffect(() => {
    calculateEMI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [principal, rate, tenure]);

  const handleLoanClick = (type) => {
    setLoanType(type);
    setShowForm('form');
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Loan Application:', { loanType, ...formData });
    alert('Loan application submitted successfully! We will contact you soon.');
    setFormData({ name: '', mobile: '', model: '', pancard: '', aadhar: '' });
    setShowForm(false);
  };

  const calculateEMI = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 12 / 100;
    const N = parseFloat(tenure) * 12;

    if (!P || !r || !N) return;

    const emi = (P * r * Math.pow(1 + r, N)) / (Math.pow(1 + r, N) - 1);
    const totalPayment = emi * N;
    const totalInterest = totalPayment - P;

    setEmiDetails({
      EMI: emi.toFixed(0),
      principal: P.toFixed(0),
      totalInterest: totalInterest.toFixed(0),
      totalPayment: totalPayment.toFixed(0),
      tenure: N,
    });
  };

  return (
    <div className="loan-container">
      <div className="page-title">
        <h2>Vehicle Loan Options</h2>
        <p>Get easy financing for your eicher vehicle</p>
      </div>

      <div className="loan-options">
        <div className="loan-card" onClick={() => handleLoanClick('New Truck Loan')}>
          <h3>New Truck Loan</h3>
          <p>Finance your new eicher truck with attractive interest rates and flexible tenure options.</p>
          
          <button type="button">Apply Now</button>
        </div>

        <div className="loan-card" onClick={() => handleLoanClick('New Bus Loan')}>
          <h3>New Bus Loan</h3>
          <p> Finance your School or Tourist Bus</p>
          
          <button type="button">Apply Now</button>
        </div>

        <div className="loan-card" onClick={() => setShowForm('emiCalculator')}>
          <h3>EMI Calculator</h3>
          <p>Calculate your monthly installments and plan your finances better.</p>
          
          <button type="button">Calculate EMI</button>
        </div>
      </div>

      {showForm === 'form' && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{loanType} Application</h3>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleFormChange}
                required
              />

              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleFormChange}
                pattern="[0-9]{10}"
                maxLength="10"
                required
              />

              <input
                type="text"
                name="model"
                placeholder="Vehicle Model Number"
                value={formData.model}
                onChange={handleFormChange}
                required
              />

              <input
                type="text"
                name="pancard"
                placeholder="PAN Card Number"
                value={formData.pancard}
                onChange={handleFormChange}
                pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                maxLength="10"
                style={{ textTransform: 'uppercase' }}
                required
              />

              <input
                type="text"
                name="aadhar"
                placeholder="Aadhar Card Number"
                value={formData.aadhar}
                onChange={handleFormChange}
                pattern="[0-9]{12}"
                maxLength="12"
                required
              />

              <div className="form-buttons">
                <button type="submit" className="submit-btn">
                  Submit
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showForm === 'emiCalculator' && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>EMI Calculator</h3>

            {emiDetails && (
              <div className="emi-summary">
                <div className="emi-header">
                  <span>ESTIMATED INSTALMENT</span>
                  <h2>
                    ₹ {parseInt(emiDetails.EMI, 10).toLocaleString('en-IN')} <span>/month</span>
                  </h2>
                  <p>Adjust loan amount, tenure, and rate - the summary updates as you go</p>
                </div>

                <div className="emi-totals">
                  <div className="total-box">
                    <span>Total interest over tenure</span>
                    <strong>₹ {parseInt(emiDetails.totalInterest, 10).toLocaleString('en-IN')}</strong>
                  </div>
                  <div className="total-box">
                    <span>Total Amount Repaid</span>
                    <strong>₹ {parseInt(emiDetails.totalPayment, 10).toLocaleString('en-IN')}</strong>
                  </div>
                </div>
              </div>
            )}

            <div className="sliders-container">
              <div className="slider-group">
                <div className="slider-header">
                  <label>Financed Amount</label>
                  <span>₹ {parseInt(principal, 10).toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="100000"
                  max="5000000"
                  step="10000"
                  value={principal}
                  onChange={(e) => setPrincipal(Number(e.target.value))}
                  className="slider"
                />
              </div>

              <div className="slider-group">
                <div className="slider-header">
                  <label>Tenure (Years)</label>
                  <span>{tenure} years</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="7"
                  step="1"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="slider"
                />
              </div>

              <div className="slider-group">
                <div className="slider-header">
                  <label>Interest Rate (p.a.)</label>
                  <span>{rate}%</span>
                </div>
                <input
                  type="range"
                  min="7"
                  max="14"
                  step="0.5"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="slider"
                />
              </div>
            </div>

            <button type="button" className="close-btn" onClick={() => setShowForm(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Loan;

