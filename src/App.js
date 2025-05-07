import React from 'react';
import stemzLogo from './stemz-logo.png'; // Importing the logo image

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header flex justify-between items-center p-4 bg-blue-600">
        {/* Logo */}
        <img src={stemzLogo} alt="Stemz Logo" className="logo w-32 h-auto" />
        
        {/* Navigation Links */}
        <nav className="nav">
          <a href="/" className="text-white hover:text-gray-300 mx-4">Home</a>
          <a href="#about" className="text-white hover:text-gray-300 mx-4">About</a>
          <a href="#contact" className="text-white hover:text-gray-300 mx-4">Contact</a>
          <a href="#online-classes" className="text-white hover:text-gray-300 mx-4">Online Classes</a>
          <a href="#self-paced-classes" className="text-white hover:text-gray-300 mx-4">Self-Paced Classes</a>
          <a href="#courses" className="text-white hover:text-gray-300 mx-4">Courses</a>
          <a href="#get-involved" className="text-white hover:text-gray-300 mx-4">Get Involved</a>
          <a href="#news" className="text-white hover:text-gray-300 mx-4">News</a>
        </nav>
      </header>
      
      {/* Main Content Section */}
      <main className="p-8">
        <section id="about" className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-lg">Welcome to Stemz Learning! We offer a range of online and self-paced courses designed to empower students to learn and grow. Explore our programs and get involved with our community!</p>
        </section>

        <section id="contact" className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p className="text-lg">Feel free to reach out to us for any inquiries. We would love to hear from you!</p>
        </section>

        <section id="online-classes" className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Online Classes</h2>
          <p className="text-lg">Our online classes are designed to offer flexibility and convenience for students across the globe. Explore our offerings today!</p>
        </section>

        <section id="self-paced-classes" className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Self-Paced Classes</h2>
          <p className="text-lg">Take control of your learning with our self-paced courses. Learn at your own pace and on your own schedule!</p>
        </section>

        <section id="courses" className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Our Courses</h2>
          <p className="text-lg">We offer a diverse range of courses in various subjects. Browse through our catalog to find the perfect course for you!</p>
        </section>

        <section id="get-involved" className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Get Involved</h2>
          <p className="text-lg">Join our community and contribute to the growth of Stemz Learning. There are various ways you can get involved!</p>
        </section>

        <section id="news" className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">News</h2>
          <p className="text-lg">Stay updated with the latest news and updates from Stemz Learning. Check out our blog and announcements.</p>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white text-center p-4">
        <p>&copy; 2025 Stemz Learning. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
