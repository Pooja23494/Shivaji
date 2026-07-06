import ProductBanner from "../components/products/ProductBanner";
import ProductGrid from "../components/products/ProductGrid";
import ProductFeatures from "../components/products/ProductFeatures";
import PackagingSection from "../components/products/PackagingSection";
import ProductFAQ from "../components/products/ProductFAQ";
import ProductInquiry from "../components/products/ProductInquiry";
import SEO from "../components/common/SEO";

const Products = () => {
  return (
    <>
      <SEO
        title="Products | Shivaji Good Poha"
        description="Explore our premium range of Thick Poha, Thin Poha, Organic Poha and more."
        keywords="Poha Products, Thick Poha, Thin Poha"
      />
      <ProductBanner />
      <ProductGrid />
      <ProductFeatures />
      <PackagingSection />
      <ProductFAQ />
      <ProductInquiry />
    </>
  );
};

export default Products;
