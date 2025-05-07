import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">About Me</h1>
      <p>This is the About Me page.</p>
    </div>
  );
}

function Articles() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Articles</h1>
      <p>This is the Articles page.</p>
    </div>
  );
}

function Reviews() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Reviews</h1>
      <p>This is the Reviews page.</p>
    </div>
  );
}

function OnlineClasses() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Online Classes</h1>
      <p>This is the Online Classes page.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Contact</h1>
      <p>This is the Contact page.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="space-x-4 mb-8">
          <Link to="/about" className="text-blue-500 hover:underline">
            About Me
          </Link>
          <Link to="/articles" className="text-blue-500 hover:underline">
            My Articles
          </Link>
          <Link to="/reviews" className="text-blue-500 hover:underline">
            Reviews
          </Link>
          <Link to="/classes" className="text-blue-500 hover:underline">
            Online Classes
          </Link>
          <Link to="/contact" className="text-blue-500 hover:underline">
            Contact
          </Link>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/classes" element={<OnlineClasses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
