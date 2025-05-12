import React from 'react';
import '../components/Home.css';
import '../pages/Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import '../components/PhotoCarousel.css'; // Correct path to the CSS file
import PhotoCarousel from '../components/MobilePhotoCarousel';
import '../components/Navbar.css';
import mapImage from '../assets/map.png'; // ✅ import the image

function Home() {
  return (
    <div className="home-container">
      <Header />

      <section className="hero">
        <h1>Education Through Experimentation</h1>
        <p>Making engaging curriculum accessible to all.</p>
        <div className="hero-buttons">
          <Link to="/online-classes" className="primary-btn">Sign Up for Classes</Link>
          <button className="secondary-btn">Access Curriculum</button>
          <Link to="/login" className="primary-btn">Login</Link>
        </div>
      </section>

      <section className="section mission-who-row">
  <div className="mission-box">
    <h2>Mission Statement</h2>
    <p>
      STEMz Learning strives to provide elementary school students with curriculum centered around
      experiments and hands-on learning. Our main goal is to introduce complex topics in palatable,
      engaging ways that inspire kids to learn more.
    </p>
  </div>

  <div className="vertical-separator"></div>

  <div className="who-box">
    <h2>Who Are We?</h2>
    <p>
      STEMz Learning is a youth-led outreach 501(c)3 nonprofit based in Folsom, California, making STEM
      education accessible to elementary school students, grades 1–6. We provide free curriculum for
      both self-guided and parent-guided learners as well as free online courses.
    </p>
  </div>

  <img src={mapImage} alt="Map" className="map-image" />
</section>

      {/* Our Work in Action slider section */}
      <section className="section our-work">
        <h2>Our Work in Action</h2>
        {/* ✅ Replace the old slider with the PhotoCarousel component */}
        <PhotoCarousel />
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Developing Courses</h3>
          <p>
            We are constantly creating and improving our curriculum so your child always has something new
            and exciting to learn.
          </p>
          <button className="link-btn">Request a Course →</button>
        </div>
        <div className="feature-card">
          <h3>Recruiting Volunteers</h3>
          <p>
            We're recruiting passionate high school and college students to teach STEM topics to young learners!
          </p>
          <button className="link-btn">Apply →</button>
        </div>
        <div className="feature-card">
          <h3>Community</h3>
          <p>
            We’re partnering with local schools and programs to host engaging in-person STEM events.
          </p>
          <button className="link-btn">Get Involved →</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;