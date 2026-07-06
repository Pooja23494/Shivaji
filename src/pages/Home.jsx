import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import Highlights from "../components/home/Highlights";
import ProductsSection from "../components/home/ProductsSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import CounterSection from "../components/home/CounterSection";
import ManufacturingProcess from "../components/home/ManufacturingProcess";
import GallerySection from "../components/home/GallerySection";
import TestimonialSection from "../components/home/TestimonialSection";
import CTASection from "../components/home/CTASection";
import ContactSection from "../components/home/ContactSection";
import MapSection from "../components/home/MapSection";
import SEO from "../components/common/SEO";

const Home = () => {
  return (
    <>
      <SEO
        title="Shivaji Good Poha | Premium Poha Manufacturer"
        description="Leading manufacturer of premium quality Poha. Hygienic production, trusted quality and nationwide distribution."
        keywords="Poha, Thick Poha, Thin Poha, Rice Flakes, Manufacturer"
      />
      <Hero />
      <AboutSection />
      <Highlights />
      <ProductsSection />
      <WhyChooseUs />
      <CounterSection />
      <ManufacturingProcess />
      <GallerySection />
      <TestimonialSection />
      <CTASection />
      <ContactSection />
      <MapSection />
    </>
  );
};

export default Home;
