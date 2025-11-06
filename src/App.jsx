import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import CTA from './components/CTA.jsx';
import BackgroundOrbs from './components/BackgroundOrbs.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Animated nav bar that hides on scroll down */}
      <Navbar />

      {/* Hero with interactive Spline cover */}
      <div className="relative">
        <Hero />
        <BackgroundOrbs />
      </div>

      {/* Feature highlights */}
      <Features />

      {/* How it works */}
      <HowItWorks />

      {/* Call to action */}
      <CTA />

      {/* Footer */}
      <footer id="contact" className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-600">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p>© {new Date().getFullYear()} SAT LMS. All rights reserved.</p>
          <nav className="flex items-center gap-5">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
