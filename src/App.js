import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'; 
import OnlineClasses from './pages/OnlineClasses';
import SelfPacedClasses from './pages/SelfPacedClasses';
import CourseBoxes from './pages/CourseBoxes';
import News from './pages/News';
import GetInvolved from './pages/GetInvolved';
import Contact from './pages/Contact';
import Login from './pages/Login';

// Import the Footer component
import Footer from './components/Footer'; 

// Optionally import Navbar if needed
// import Navbar from './components/Navbar'; 

function App() {
  return (
    <Router>
      {/* Optionally include the Navbar if needed */}
      {/* <Navbar /> */}

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/online-classes" element={<OnlineClasses />} />
          <Route path="/self-paced-classes" element={<SelfPacedClasses />} />
          <Route path="/course-boxes" element={<CourseBoxes />} />
          <Route path="/news" element={<News />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>

      {/* Footer component */}
    
    </Router>
  );
}

export default App;