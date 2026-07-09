import GalleryCategories from "../components/gallery/GalleryCategories";
import GalleryStats from "../components/gallery/GalleryStats";
import InstagramGallery from "../components/gallery/InstagramGallery";
import GalleryCTA from "../components/gallery/GalleryCTA";
import SEO from "../components/common/SEO";
import PageBanner from "../components/common/PageBanner";
import banner from "../assets/images/gallery/gallery-banner.webp";

const Gallery = () => {
  return (
    <>
      <SEO
        title="Gallery | Shivaji Good Poha"
        description="Explore our manufacturing unit, production process, events and product gallery."
        keywords="Poha Gallery, Factory Images"
      />
      <PageBanner
        image={banner}
        title="Gallery"
        description="Explore our modern manufacturing facility, premium products,
          production process, packaging standards, and memorable moments that
          define Shivaji Good Poha."
        breadcrumb="Home > Gallery"
      />
      <GalleryCategories />
      <GalleryStats />
      <InstagramGallery />
      <GalleryCTA />
    </>
  );
};

export default Gallery;
