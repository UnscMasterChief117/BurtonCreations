import React from "react";

function App() {
  return (
    <div className="bg-gradient-to-br from-black
   
      to-black min-h-screen text-white flex flex-col">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 px-8 py-4 flex justify-between items-center 
                         bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg">
        <h1 className="text-2xl font-bold tracking-wide text-white drop-shadow-md">
          Burton Creations
        </h1>
        <nav className="hidden md:flex space-x-6 text-gray-200">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <button className="px-4 py-2 rounded-xl bg-white/20 border border-white/30 backdrop-blur-md hover:bg-white/30 transition">
          Get Started
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6 pt-32">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl max-w-3xl border border-white/20">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-white">
            Creative Designs, <span className="text-blue-300">Built for You</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            At Burton Creations, we craft stunning digital experiences that blend creativity and technology to bring your vision to life.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-6 py-3 rounded-xl bg-blue-500/80 backdrop-blur-md shadow-lg hover:bg-blue-600 transition">
              Explore Work
            </button>
            <button className="px-6 py-3 rounded-xl bg-white/20 border border-white/30 backdrop-blur-md hover:bg-white/30 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {[
          { title: "💡 Innovative Ideas", text: "Unique designs tailored to your needs, making your brand stand out." },
          { title: "⚡ Fast & Modern", text: "Built with the latest tools and technologies for performance and style." },
          { title: "🎨 Creative Vision", text: "Bringing imagination to life with stunning visuals and smooth UX." },
        ].map((feature, i) => (
          <div key={i} className="p-6 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-gray-200">{feature.text}</p>
          </div>
        ))}
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 flex justify-center">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-3xl p-10 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">About Burton Creations</h2>
          <p className="text-gray-200 text-lg">
            We specialize in blending creativity with modern technology. Whether it's web design, branding, or digital art, Burton Creations delivers tailored solutions that inspire and captivate.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 flex justify-center">
        <div className="bg-blue-600/20 backdrop-blur-xl border border-white/20 shadow-xl rounded-3xl p-10 text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Let’s Create Together</h2>
          <p className="mb-6 text-gray-200">Have an idea? Let’s turn it into reality. Reach out today!</p>
          <button className="px-6 py-3 rounded-xl bg-white/20 border border-white/30 backdrop-blur-md hover:bg-white/30 transition">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/10 backdrop-blur-lg border-t border-white/20 py-6 text-center text-gray-300">
        <p>© {new Date().getFullYear()} Burton Creations. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
