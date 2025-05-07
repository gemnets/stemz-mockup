import logo from './logo.svg';

function App() {
  return (
    <div className="App min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">STEMz Learning</div>
        <div className="space-x-4 hidden md:flex">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About Us</a>
          <a href="#classes" className="hover:text-blue-600">Online Classes</a>
          <a href="#self-paced" className="hover:text-blue-600">Self-Paced Classes</a>
          <a href="#courses" className="hover:text-blue-600">Course Boxes</a>
          <a href="#news" className="hover:text-blue-600">News</a>
          <a href="#involved" className="hover:text-blue-600">Get Involved</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ml-4">
          Log In
        </button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="text-center py-16 px-4 bg-gradient-to-r from-blue-100 to-blue-50">
        <h1 className="text-4xl font-extrabold mb-4">Education through experimentation.</h1>
        <p className="text-xl text-gray-700 mb-6">
          Making engaging curriculum accessible to all.
        </p>
        <img src={logo} alt="STEMz logo" className="w-24 h-24 mx-auto mb-6 animate-pulse" />
        <div className="space-x-4">
          <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
            Sign Up for Classes
          </button>
          <button className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600">
            Access Curriculum
          </button>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="py-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Mission Statement</h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-6">
          STEMz Learning strives to provide elementary school students with curriculum centered around
          experiments and hands-on learning. Our main goal is to introduce complex topics in palatable,
          engaging ways that inspire kids to learn more.
        </p>
      </section>

      {/* Who Are We Section */}
      <section id="who" className="bg-white py-12 px-4 text-center shadow-inner">
        <h2 className="text-3xl font-bold mb-4">Who Are We?</h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-6">
          STEMz Learning is a youth-led outreach 501(c)3 nonprofit based in Folsom, California, that wants
          to make STEM education more accessible to elementary school students, grades 1–6. We provide free
          curriculum for both self-guided and parent-guided learners as well as free online courses.
        </p>
      </section>

      {/* Cards Section */}
      <section className="py-12 px-4 grid gap-8 md:grid-cols-3">
        <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
          <h3 className="text-xl font-bold mb-2">Developing Courses</h3>
          <p className="text-gray-700 mb-4">
            We are constantly creating and improving our curriculum so that your child always has new and
            exciting things to learn about.
          </p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Request a Course
          </button>
        </div>
        <div className="bg-green-50 p-6 rounded-lg shadow text-center">
          <h3 className="text-xl font-bold mb-2">Recruiting Volunteers</h3>
          <p className="text-gray-700 mb-4">
            We are recruiting hardworking high-school and college students to teach STEM topics and develop
            curriculum! Apply now.
          </p>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Apply
          </button>
        </div>
        <div className="bg-yellow-50 p-6 rounded-lg shadow text-center">
          <h3 className="text-xl font-bold mb-2">Community Connections</h3>
          <p className="text-gray-700 mb-4">
            We are reaching out to local elementary schools and community programs to host in-person events.
          </p>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
            Learn More
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 text-center p-4">
        &copy; {new Date().getFullYear()} STEMz Learning. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
