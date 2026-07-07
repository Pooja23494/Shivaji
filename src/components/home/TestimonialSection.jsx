import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/swiper.css";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const testimonials = [
  {
    name: "Rajesh Patel",
    city: "Surat",
    review: "Excellent quality poha with great taste. Our customers love it.",
  },
  {
    name: "Neha Shah",
    city: "Navsari",
    review: "Fresh, hygienic and perfectly packed products.",
  },
  {
    name: "Amit Joshi",
    city: "Ahmedabad",
    review: "Reliable supplier with premium quality products.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <Container>
        <SectionHeading
          subtitle="Testimonials"
          title="What Our Customers Say"
        />

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name} className="h-auto">
              <div className="group flex h-full flex-col rounded-3xl border border-blue-100 bg-white p-8 shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
                <div className="mb-4 flex gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} aria-label="Star" />
                  ))}
                </div>

                <p className="flex-1 text-gray-700 leading-8">
                  "{item.review}"
                </p>

                <h3 className="mt-6 text-xl font-bold">{item.name}</h3>

                <p className="text-gray-500">{item.city}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default TestimonialSection;
