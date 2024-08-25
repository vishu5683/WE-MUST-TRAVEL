import HeroSection from '../components/HeroSection';
import Locations from '../components/Locations';
import Newsletter from '../components/Newsletter';
import ServicesSection from '../components/ServicesSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection/>
      <Locations/>
      <Newsletter/>
    </main>
  );
}
