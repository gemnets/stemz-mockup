import React from 'react';
import stemzLogo from './stemz-logo.png'; // Import logo image

const App = () => {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header flex justify-between items-center p-4 bg-blue-700 shadow-md">
        {/* Logo */}
        <img src={stemzLogo} alt="Stemz Logo" className="logo w-20 h-auto" />

        {/* SVG Divider */}
        <svg
          width="1131"
          height="4049"
          viewBox="0 0 1131 4049"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="divider"
        >
          <g clipPath="url(#clip0_1_2)">
            <rect width="1131" height="4049" fill="white" />
            <g clipPath="url(#clip1_1_2)">
              <line
                x1="452.5"
                y1="-0.00697607"
                x2="455.5"
                y2="214.993"
                stroke="black"
              />
              <line
                x1="574.5"
                y1="-0.00697607"
                x2="577.5"
                y2="214.993"
                stroke="black"
              />
              <line
                x1="674.5"
                y1="-0.00697607"
                x2="677.5"
                y2="214.993"
                stroke="black"
              />
              <line
                x1="788.5"
                y1="-0.00697607"
                x2="791.5"
                y2="214.993"
                stroke="black"
              />
              <line
                x1="876.5"
                y1="-0.00697607"
                x2="879.5"
                y2="214.993"
                stroke="black"
              />
              <line
                x1="960.5"
                y1="-0.00697607"
                x2="963.5"
                y2="214.993"
                stroke="black"
              />
              <line
                x1="1033.5"
                y1="-0.00697607"
                x2="1036.5"
                y2="214.993"
                stroke="black"
              />
            </g>
            <rect y="-7" width="197" height="223" fill="#D9D9D9" />
            <line
              x1="340.5"
              y1="-0.00697607"
              x2="343.5"
              y2="214.993"
              stroke="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_2">
              <rect width="1131" height="4049" fill="white" />
            </clipPath>
            <clipPath id="clip1_1_2">
              <rect width="1131" height="215" fill="white" />
            </clipPath>
          </defs>
        </svg>

        {/* Navigation Links */}
        <nav className="nav flex space-x-6">
          <a href="/" className="text-white hover:text-yellow-400 text-lg font-semibold transition-colors">Home</a>
          <a href="#about" className="text-white hover:text-yellow-400 text-lg font-semibold transition-colors">About</a>
          <a href="#contact" className="text-white hover:text-yellow-400 text-lg font-semibold transition-colors">Contact</a>
          <a href="#online-classes" className="text-white hover:text-yellow-400 text-lg font-semibold transition-colors">Online Classes</a>
          <a href="#self-paced-classes" className="text-white hover:text-yellow-400 text-lg font-semibold transition-colors">Self-Paced Classes</a>
          <a href="#courses" className="text-white hover:text-yellow-400 text-lg font-semibold transition-colors">Courses</a>
          <a href="#get-involved" className="text-white hover:text-yellow-400 text-lg font-semibold transition-colors">Get Involved</a>
          <a href="#news" className="text-white hover:text-yellow-400 text-lg font-semibold transition-colors">News</a>
        </nav>
      </header>

      {/* Main Content Section */}
      <main className="p-8 bg-gray-100">
        <section id="about" className="mb-8 bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 transition-all">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-700">Welcome to Stemz Learning! We offer a range of online and self-paced courses designed to empower students to learn and grow. Explore our programs and get involved with our community!</p>
        </section>

        <section id="contact" className="mb-8 bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 transition-all">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Contact</h2>
          <p className="text-lg text-gray-700">Feel free to reach out to us for any inquiries. We would love to hear from you!</p>
        </section>

        <section id="online-classes" className="mb-8 bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 transition-all">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Online Classes</h2>
          <p className="text-lg text-gray-700">Our online classes are designed to offer flexibility and convenience for students across the globe. Explore our offerings today!</p>
        </section>

        <section id="self-paced-classes" className="mb-8 bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 transition-all">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Self-Paced Classes</h2>
          <p className="text-lg text-gray-700">Take control of your learning with our self-paced courses. Learn at your own pace and on your own schedule!</p>
        </section>

        <section id="courses" className="mb-8 bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 transition-all">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Our Courses</h2>
          <p className="text-lg text-gray-700">We offer a diverse range of courses in various subjects. Browse through our catalog to find the perfect course for you!</p>
        </section>

        <section id="get-involved" className="mb-8 bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 transition-all">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Get Involved</h2>
          <p className="text-lg text-gray-700">Join our community and contribute to the growth of Stemz Learning. There are various ways you can get involved!</p>
        </section>

        <section id="news" className="mb-8 bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 transition-all">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">News</h2>
          <p className="text-lg text-gray-700">Stay updated with the latest news and updates from Stemz Learning. Check out our blog and announcements.</p>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-blue-700 text-white text-center p-4">
        <p>&copy; 2025 Stemz Learning. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
