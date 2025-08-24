import React from "react";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="w-full py-4 px-8 flex justify-between items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-md fixed top-0 z-50">
        <h1 className="text-2xl font-bold tracking-wide text-blue-600 dark:text-blue-400">
          Burton Creations
        </h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#features" className="hover:text-blue-500 transition">Features</a>
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
        </nav>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition">
          Get Started
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6 pt-24 md:pt-32">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Creative Designs,  
          <span className="text-blue-600 dark:text-blue-400"> Built for You</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
          At Burton Creations, we craft stunning digital experiences that blend creativity and technology to bring your vision to life.
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition">
            Explore Work
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg shadow-md transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-4">💡 Innovative Ideas</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Unique designs tailored to your needs, making your brand stand out.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-4">⚡ Fast & Modern</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Built with the latest tools and technologies for performance and style.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-4">🎨 Creative Vision</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Bringing imagination to life with stunning visuals and smooth UX.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Burton Creations</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            We specialize in blending creativity with modern technology. Whether it's web design, branding, or digital art, Burton Creations delivers tailored solutions that inspire and captivate.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Let’s Create Together</h2>
        <p className="mb-6">Have an idea? Let’s turn it into reality. Reach out today!</p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <p>© {new Date().getFullYear()} Burton Creations. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
