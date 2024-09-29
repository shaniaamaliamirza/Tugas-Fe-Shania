// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from "./pages/HomePages/Home.js";
import Overview from "./pages/OverviewPages/Overview.js";
import AboutMe from "./pages/AboutMePages/AboutMe.js";
import SkillPengalaman from "./pages/SKillPengalamanPages/SKillPengalaman.js";
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Nav1 from "./Dashboard/Nav1.js";
import ContactMe from "./pages/ContactMe/ContactMe.js";
import Login from "./pages/Logres/Login.js";
import Register from "./pages/Logres/Register.js";
import Akun from "./pages/Akprof/Akun.js";
import Profil from "./pages/Akprof/Profil.js";
import Masuk from "./pages/Masuk/Masuk.js";
import Rumah from "./Dashboard/Rumah.js";
import Tentangsaya from "./Dashboard/Tentangsaya.js";
import Ringkasan from "./Dashboard/Ringkasan.js";
import Keahlian from "./Dashboard/Keahlian.js";
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isLoggedIn");
    if (userLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const handleMasuk = () => {
    console.log("User logged in");
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          {/* Rute Halaman dengan Navbar dan Footer */}
          <Route 
            path="/" 
            element={
              <LayoutWithNavbarFooter>
                <Home />
              </LayoutWithNavbarFooter>
            } 
          />
          <Route 
            path="/Overview" 
            element={
              <LayoutWithNavbarFooter>
                <Overview />
              </LayoutWithNavbarFooter>
            } 
          />
          <Route 
            path="/AboutMe" 
            element={
              <LayoutWithNavbarFooter>
                <AboutMe />
              </LayoutWithNavbarFooter>
            } 
          />
          <Route 
            path="/SkillPengalaman" 
            element={
              <LayoutWithNavbarFooter>
                <SkillPengalaman />
              </LayoutWithNavbarFooter>
            } 
          />
          <Route 
            path="/ContactMe" 
            element={
              <LayoutWithNavbarFooter>
                <ContactMe />
              </LayoutWithNavbarFooter>
            } 
          />
          <Route 
            path="/Login" 
            element={
              <LayoutWithNavbarFooter>
                <Login onLogin={handleLogin} />
              </LayoutWithNavbarFooter>
            } 
          />
          <Route 
            path="/Register" 
            element={
              <LayoutWithNavbarFooter>
                <Register />
              </LayoutWithNavbarFooter>
            } 
          />
          <Route 
            path="/Akun" 
            element={
              isLoggedIn ? (
                <LayoutWithNavbarFooter>
                  <Akun />
                </LayoutWithNavbarFooter>
              ) : (
                <Navigate to="/login" />
              )
            } 
          />
          <Route 
            path="/Profil" 
            element={
              <LayoutWithNavbarFooter>
                <Profil />
              </LayoutWithNavbarFooter>
            } 
          />
          <Route 
            path="/Masuk" 
            element={
              <LayoutWithNavbarFooter>
                <Masuk onMasuk={handleMasuk} />
              </LayoutWithNavbarFooter>
            } 
          />

          {/* Rute Halaman Dashboard tanpa Navbar dan Footer */}
          <Route 
            path="/dashboard/*" 
            element={
              isLoggedIn ? (
                <DashboardLayout />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

// Komponen untuk halaman dengan Navbar dan Footer
function LayoutWithNavbarFooter({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

// Layout khusus untuk halaman dashboard
function DashboardLayout() {
  const location = useLocation();
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Cek apakah rute saat ini adalah dashboard utama
    if (location.pathname === '/dashboard') {
      setShowWelcome(true);
    } else {
      setShowWelcome(false);
    }
  }, [location]);

  return (
    <div className="flex h-screen">
      <Nav1 /> {/* Sidebar Dashboard */}
      <div className="flex-1 p-4">
        {showWelcome && <WelcomeMessage />} {/* Tampilkan pesan selamat datang hanya di halaman utama dashboard */}
        <Routes>
          <Route path="rumah" element={<Rumah />} />
          <Route path="tentangsaya" element={<Tentangsaya />} />
          <Route path="ringkasan" element={<Ringkasan />} />
          <Route path="keahlian" element={<Keahlian />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
