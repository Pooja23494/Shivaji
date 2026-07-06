import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Rajesh Patel",
    company: "Patel Traders",
    review:
      "Excellent quality Poha. Consistent supply and hygienic packaging. Highly recommended.",
    image: "/images/client1.jpg",
  },
  {
    name: "Mehul Shah",
    company: "Shree Foods",
    review:
      "We've been purchasing in bulk for years. Great service and premium quality.",
    image: "/images/client2.jpg",
  },
  {
    name: "Amit Kumar",
    company: "Retail Partner",
    review:
      "Fresh products, competitive pricing and timely delivery every time.",
    image: "/images/client3.jpg",
  },
];
