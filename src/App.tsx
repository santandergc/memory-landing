import { Navbar } from './components/NavBar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Benefits } from './components/Benefits';
import { Pricing } from './components/Pricing';
import { CallToAction } from './components/CallToAction';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <CallToAction />
    </div>
  );
}

export default App;