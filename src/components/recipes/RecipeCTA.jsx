import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";
import { toast } from "react-toastify";
import bg from "../../assets/images/recipes/recipe-cta-bg.webp";

const RecipeCTA = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    toast.success("Thanks for subscribing! 🎉");

    e.target.reset();
  };

  const socials = [
    {
      icon: FaFacebookF,
      url: "https://www.facebook.com/share/1AadJhoCZ3/",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/shivaji_6914?igsh=ajNqYzlrMHEzdHI=",
    },
  ];

  return (
    <section
      className="relative overflow-hidden py-28"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-blue-950/75" />

      {/* Decorative Blurs */}

      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="container relative z-10 mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl rounded-[40px] border border-white/20 bg-white/10 p-10 text-center backdrop-blur-xl md:p-16"
        >
          <span className="inline-block rounded-full bg-white/20 px-6 py-2 text-sm font-semibold uppercase tracking-[4px] text-blue-300">
            Join Our Community
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-white md:text-5xl">
            Stay Updated with Delicious Recipes
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Subscribe to receive authentic Poha recipes, cooking tips, product
            updates, and healthy breakfast ideas directly in your inbox.
          </p>

          {/* Newsletter */}

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row"
          >
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-2xl border border-white/20 bg-white px-6 py-4 text-gray-800 outline-none"
            />

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-2xl bg-blue-400 px-8 py-4 font-semibold text-gray-900 transition hover:bg-blue-300"
              aria-label="Subscribe"
            >
              <FaPaperPlane />
              Subscribe
            </button>
          </form>

          {/* Social Icons */}

          <div className="mt-12 flex justify-center gap-5">
            {socials.map(({ icon: Icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-400 hover:text-gray-900"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecipeCTA;
