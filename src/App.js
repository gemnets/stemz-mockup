import React from 'react';
import logo from './assets/stemz-logo.png'; // place your uploaded logo image here

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <div className="flex items-center">
            <img src={logo} alt="STEMz Learning Logo" className="h-12 w-auto mr-3" />
            <span className="text-2xl font-bold text-green-700">STEMz Learning</span>
          </div>
          <nav className="space-x-6 hidden md:flex">
            <a href="#" className="text-green-700 hover:text-green-900">Home</a>
            <a href="#" className="hover:text-green-700">About Us</a>
            <a href="#" className="hover:text-green-700">Online Classes</a>
            <a href="#" className="hover:text-green-700">Self-Paced Classes</a>
            <a href="#" className="hover:text-green-700">Course Boxes</a>
            <a href="#" className="hover:text-green-700">News</a>
            <a href="#" className="hover:text-green-700">Get Involved</a>
            <a href="#" className="hover:text-green-700">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 bg-green-100">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-800">
          Education Through Experimentation
        </h1>
        <p className="text-lg md:text-xl text-green-700 mb-8 max-w-2xl mx-auto">
          Making engaging curriculum accessible to all.
        </p>
        <div className="space-x-4">
          <button className="px-6 py-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition">
            Sign Up for Classes
          </button>
          <button className="px-6 py-2 border border-green-700 text-green-700 rounded-full hover:bg-green-200 transition">
            Access Curriculum
          </button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-green-800 mb-6">🌟 Mission Statement</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          STEMz Learning strives to provide elementary school students with curriculum centered around
          experiments and hands-on learning. Our main goal is to introduce complex topics in palatable,
          engaging ways that inspire kids to learn more.
        </p>
      </section>

      {/* Who Are We Section */}
      <section className="bg-green-50 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-800 mb-6">👩‍🔬 Who Are We?</h2>
          <p className="text-gray-700 leading-relaxed">
            STEMz Learning is a youth-led outreach 501(c)3 nonprofit based in Folsom, California, making STEM
            education accessible to elementary school students, grades 1–6. We provide free curriculum for
            both self-guided and parent-guided learners as well as free online courses.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        <div className="bg-white border border-green-200 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-green-700 mb-2">Developing Courses</h3>
          <p className="text-gray-600 mb-4">
            We are constantly creating and improving our curriculum so your child always has something new
            and exciting to learn.
          </p>
          <button className="text-green-700 hover:underline">Request a Course →</button>
        </div>
        <div className="bg-white border border-green-200 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-green-700 mb-2">Recruiting Volunteers</h3>
          <p className="text-gray-600 mb-4">
            We're recruiting passionate high school and college students to teach STEM topics to young learners!
          </p>
          <button className="text-green-700 hover:underline">Apply →</button>
        </div>
        <div className="bg-white border border-green-200 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-green-700 mb-2">Connecting with Community</h3>
          <p className="text-gray-600 mb-4">
            We’re partnering with local schools and programs to host engaging in-person STEM events.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-green-100 text-center p-4">
        © {new Date().getFullYear()} STEMz Learning. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
