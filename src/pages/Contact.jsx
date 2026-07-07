import ContactInfo from "../components/contact/ContactInfo";
import ContactFormSection from "../components/contact/ContactFormSection";
import WhyContact from "../components/contact/WhyContact";
import ContactFAQ from "../components/contact/ContactFAQ";
import ContactCTA from "../components/contact/ContactCTA";
import SEO from "../components/common/SEO";
import PageBanner from "../components/common/PageBanner";
import banner from "../assets/images/contact/contact-banner.webp";

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Us | Shivaji Good Poha"
        description="Contact Shivaji Good Poha for business inquiries, dealership and manufacturing details."
        keywords="Poha Contact, Dealer Inquiry"
      />
      <PageBanner
        image={banner}
        title="Contact Us"
        description="We'd love to hear from you. Get in touch for bulk orders, dealership
          inquiries, or any product-related questions."
        breadcrumb="Home > Contact Us"
      />
      <ContactInfo />
      <ContactFormSection />
      <WhyContact />
      <ContactFAQ />
      <ContactCTA />
    </>
  );
};

export default Contact;
