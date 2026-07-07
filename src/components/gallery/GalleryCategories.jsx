import { useMemo, useState } from "react";
import gallery from "../../data/gallery";
import GalleryGrid from "./GalleryGrid";
import GalleryModal from "./GalleryModal";
import SectionHeading from "../common/SectionHeading";
import Container from "../common/Container";

const categories = [
  "All",
  "Factory",
  "Products",
  "Packaging",
  "Team",
  "Events",
];

const GalleryCategories = () => {
  const [active, setActive] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filtered = useMemo(() => {
    if (active === "All") return gallery;

    return gallery.filter((item) => item.category === active);
  }, [active]);

  const selectedImage = selectedIndex !== null ? filtered[selectedIndex] : null;

  const openImage = (image) => {
    const index = filtered.findIndex((i) => i.id === image.id);
    setSelectedIndex(index);
  };

  const closeImage = () => setSelectedIndex(null);

  const nextImage = () => {
    setSelectedIndex((prev) => (prev === filtered.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev === 0 ? filtered.length - 1 : prev - 1));
  };

  return (
    <section className="bg-gray-50 py-24">
      <Container>
        {/* Heading */}

        <SectionHeading subtitle="Our Gallery" title="Explore Our Journey" />

        {/* Filter */}

        <div className="mb-14 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              aria-label="Category"
              onClick={() => {
                setActive(category);
                setSelectedIndex(null);
              }}
              className={`rounded-full px-7 py-3 font-semibold transition ${
                active === category
                  ? "bg-blue-700 text-white shadow-lg"
                  : "bg-white hover:bg-blue-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <GalleryGrid images={filtered} onPreview={openImage} />
      </Container>

      <GalleryModal
        images={filtered}
        selectedImage={selectedImage}
        selectedIndex={selectedIndex}
        onClose={closeImage}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </section>
  );
};

export default GalleryCategories;
