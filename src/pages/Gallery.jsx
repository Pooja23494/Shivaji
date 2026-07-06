import GalleryBanner from "../components/gallery/GalleryBanner";
import GalleryCategories from "../components/gallery/GalleryCategories";
import ProcessSection from "../components/gallery/ProcessSection";
import GalleryStats from "../components/gallery/GalleryStats";
import InstagramGallery from "../components/gallery/InstagramGallery";
import GalleryCTA from "../components/gallery/GalleryCTA";
import SEO from "../components/common/SEO";

const Gallery = () => {
  return (
    <>
      <SEO
        title="Gallery | Shivaji Good Poha"
        description="Explore our manufacturing unit, production process, events and product gallery."
        keywords="Poha Gallery, Factory Images"
      />
      <GalleryBanner />
      <GalleryCategories />
      <ProcessSection />
      <GalleryStats />
      <InstagramGallery />
      <GalleryCTA />
    </>
  );
};

export default Gallery;
