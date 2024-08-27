import CallToAction from '../components/CallToAction';
import CustomerReviews from '../components/CustomerReviews';
import TravelInquiryForm from '../components/Enquiry';
import HeroSection from '../components/HeroSection';
import Locations from '../components/Locations';
import Newsletter from '../components/Newsletter';
import ServicesSection from '../components/ServicesSection';



export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection/>
      <TravelInquiryForm/>
      <Locations/>
        <CustomerReviews/>
      <CallToAction />
      <Newsletter/>
 
    </main>
  );
}
