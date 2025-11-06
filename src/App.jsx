import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import CoursesShowcase from './components/CoursesShowcase.jsx';
import AnimatedFooter from './components/AnimatedFooter.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Animated nav bar that hides on scroll down */}
      <Navbar />

      {/* Hero with interactive Spline cover */}
      <Hero />

      {/* Courses section with animated reveal */}
      <CoursesShowcase />

      {/* Animated footer with subtle motion accents */}
      <AnimatedFooter />
    </div>
  );
}

export default App;
