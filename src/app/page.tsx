import CallToAction from '../components/CallToAction';
import HeroSection from '../components/HeroSection';
import Locations from '../components/Locations';
import Newsletter from '../components/Newsletter';
import ServicesSection from '../components/ServicesSection';
// import TourSearch from '../components/TourSearch';
// import Testimonials from '../components/Testimonials';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      {/* <TourSearch/> */}
      <ServicesSection/>
      <Locations/>
      {/* <Testimonials/> */}
      <CallToAction />
      <Newsletter/>
    </main>
  );
}
