import ProductGrid from "../components/products/ProductGrid";
import ProductFeatures from "../components/products/ProductFeatures";
import PackagingSection from "../components/products/PackagingSection";
import ProductFAQ from "../components/products/ProductFAQ";
import ProductInquiry from "../components/products/ProductInquiry";
import SEO from "../components/common/SEO";
import PageBanner from "../components/common/PageBanner";
import banner from "../assets/images/products/product-banner.webp";

const Products = () => {
  return (
    <>
      <SEO
        title="Products | Shivaji Good Poha"
        description="Explore our premium range of Thick Poha, Thin Poha, Organic Poha and more."
        keywords="Poha Products, Thick Poha, Thin Poha"
      />
      <PageBanner
        image={banner}
        title="Our Products"
        description="Discover our premium range of hygienically processed Poha products,
          crafted with quality, consistency and freshness."
        breadcrumb="Home > Products"
      />
      <ProductGrid />
      <ProductFeatures />
      <PackagingSection />
      <ProductFAQ />
      <ProductInquiry />
    </>
  );
};

export default Products;
