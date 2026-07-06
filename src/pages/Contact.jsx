import ContactBanner from "../components/contact/ContactBanner";
import ContactInfo from "../components/contact/ContactInfo";
import ContactFormSection from "../components/contact/ContactFormSection";
import WhyContact from "../components/contact/WhyContact";
import ContactFAQ from "../components/contact/ContactFAQ";
import ContactCTA from "../components/contact/ContactCTA";
import SEO from "../components/common/SEO";

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Us | Shivaji Good Poha"
        description="Contact Shivaji Good Poha for business inquiries, dealership and manufacturing details."
        keywords="Poha Contact, Dealer Inquiry"
      />
      <ContactBanner />
      <ContactInfo />
      <ContactFormSection />
      <WhyContact />
      <ContactFAQ />
      <ContactCTA />
    </>
  );
};

export default Contact;
