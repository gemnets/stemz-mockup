import React from 'react';
import logo from './logo.svg'; // replace with your logo image if available

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <div className="flex items-center">
            <img src={logo} alt="STEMz Learning Logo" className="h-10 w-10 mr-2" />
            <span className="text-xl font-bold text-blue-600">STEMz Learning</span>
          </div>
          <nav className="space-x-4 hidden md:flex">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">About Us</a>
            <a href="#" className="hover:text-blue-600">Online Classes</a>
            <a href="#" className="hover:text-blue-600">Self-Paced Classes</a>
            <a href="#" className="hover:text-blue-600">Course Boxes</a>
            <a href="#" className="hover:text-blue-600">News</a>
            <a href="#" className="hover:text-blue-600">Get Involved</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
            <button className="ml-4 px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700">Log In</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-r from-blue-50 to-blue-100">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Education through experimentation.</h1>
        <p className="text-lg text-gray-700 mb-6">Making engaging curriculum accessible to all.</p>
        <div className="space-x-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Sign Up for Classes
          </button>
          <button className="px-6 py-2 bg-white border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
            Access Curriculum
          </button>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="max-w-5xl mx-auto p-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span role="img" aria-label="Science" className="mr-2">🧪</span> Mission Statement
        </h2>
        <p className="text-gray-700 mb-6">
          STEMz Learning strives to provide elementary school students with curriculum centered around
          experiments and hands-on learning. Our main goal is to introduce complex topics in palatable,
          engaging ways that inspire kids to learn more.
        </p>
      </section>

      {/* Who Are We */}
      <section className="bg-white py-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Who Are We?</h2>
          <p className="text-gray-700 mb-6">
            STEMz Learning is a youth-led outreach 501(c)3 nonprofit based in Folsom, California, making STEM
            education accessible to elementary school students, grades 1-6. We provide free curriculum for
            both self-guided and parent-guided learners as well as free online courses.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto p-8 grid gap-6 md:grid-cols-3">
        <div className="bg-blue-100 p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold mb-2">Developing Courses</h3>
          <p>
            We are constantly creating and improving our curriculum so that your child always has new and
            exciting things to learn about.
          </p>
          <button className="mt-2 text-blue-600 hover:underline">Request a Course →</button>
        </div>
        <div className="bg-blue-100 p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold mb-2">Recruiting Dedicated Volunteers</h3>
          <p>
            We are recruiting hard-working high-school and college students to teach STEM topics to
            elementary school students and develop curriculum!
          </p>
          <button className="mt-2 text-blue-600 hover:underline">Apply →</button>
        </div>
        <div className="bg-blue-100 p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold mb-2">Connecting with Local Community</h3>
          <p>
            We are reaching out to local elementary schools and community programs to host in-person events.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 text-center p-4 mt-8">
        © {new Date().getFullYear()} STEMz Learning. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
