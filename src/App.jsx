import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import CTA from './components/CTA.jsx';
import BackgroundOrbs from './components/BackgroundOrbs.jsx';
import AchieversCarousel from './components/AchieversCarousel.jsx';
import CoursesShowcase from './components/CoursesShowcase.jsx';
import AnimatedFooter from './components/AnimatedFooter.jsx';

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

      {/* Courses section with animated reveal */}
      <CoursesShowcase />

      {/* 3D Achievers Carousel */}
      <AchieversCarousel />

      {/* Call to action */}
      <CTA />

      {/* Animated footer with subtle motion accents */}
      <AnimatedFooter />
    </div>
  );
}

export default App;
