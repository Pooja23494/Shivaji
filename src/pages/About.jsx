import CompanyIntro from "../components/about/CompanyIntro";
import VisionMission from "../components/about/VisionMission";
import CompanyTimeline from "../components/about/CompanyTimeline";
import ManufacturingProcess from "../components/about/ManufacturingProcess";
import Certifications from "../components/about/Certifications";
import TeamSection from "../components/about/TeamSection";
import CTASection from "../components/common/CTASection";
import SEO from "../components/common/SEO";
import PageBanner from "../components/common/PageBanner";
import banner from "../assets/images/about/about-banner.webp";

const About = () => {
  return (
    <>
      <SEO
        title="About Us | Shivaji Good Poha"
        description="Learn about Shivaji Good Poha, our manufacturing process, quality standards and company vision."
        keywords="About Poha Manufacturer, Rice Flakes Company"
      />
      <PageBanner
        image={banner}
        title="About Us"
        description="Delivering premium quality Poha with trust, innovation and excellence
          since our beginning."
        breadcrumb="Home > About"
      />
      <CompanyIntro />
      <VisionMission />
      <CompanyTimeline />
      <ManufacturingProcess />
      <Certifications />
      <TeamSection />
      <CTASection />
    </>
  );
};

export default About;
