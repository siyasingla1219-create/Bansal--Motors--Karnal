import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import Contact from './pages/Contact';
import Employee from './pages/Employee';
import RoadwaysTeam from './pages/RoadwaysTeam';
import Outlets from './components/Outlets';
import Workshop from './Workshop';
import VehicleCard from './components/VehicleCard';
import Loan from './pages/Loan';
import Location from './pages/Location';



function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Navigation />
        
        


        <main>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/roadways-team" element={<RoadwaysTeam />} />
            <Route path="/outlets" element={<Outlets />} />
            <Route path="/loan" element={<Loan />} />
            <Route path="/location" element={<Location />} />
            <Route path="/workshop" element={<Workshop />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;