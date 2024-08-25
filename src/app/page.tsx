import HeroSection from '../components/HeroSection';
import Locations from '../components/Locations';
import Newsletter from '../components/Newsletter';
import ServicesSection from '../components/ServicesSection';
// import Testimonials from '../components/Testimonials';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection/>
      <Locations/>
      {/* <Testimonials/> */}
      <Newsletter/>
    </main>
  );
}
