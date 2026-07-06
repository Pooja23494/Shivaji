import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import {
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaTag,
  FaCommentDots,
} from "react-icons/fa";

const schema = yup.object({
  name: yup.string().required("Full Name is required"),
  email: yup.string().email("Enter valid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Enter valid mobile number")
    .required("Phone number is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});

const ContactFormSection = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("subject", data.subject);
      formData.append("message", data.message);

      formData.append("_captcha", "false");
      formData.append("_template", "table");

      await fetch("https://formsubmit.co/zeelsharma1998@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      toast.success("Message sent successfully!");

      reset();
    } catch {
      toast.error("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-5">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* FORM */}

          <div className="rounded-[30px] bg-white p-10 shadow-xl">
            <span className="font-semibold uppercase tracking-[4px] text-blue-700">
              Send Message
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Let's Start a Conversation
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-6">
              {/* Name */}

              <div>
                <div className="relative">
                  <FaUser
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                    aria-label="User"
                  />

                  <input
                    id="name"
                    {...register("name")}
                    placeholder="Full Name"
                    className="w-full rounded-xl border border-gray-300 py-4 pl-14 pr-5 outline-none transition focus:border-blue-700"
                    aria-invalid={errors.name}
                    aria-describedby="name-error"
                  />
                </div>

                <p id="name-error" className="mt-2 text-sm text-red-500">
                  {errors.name?.message}
                </p>
              </div>

              {/* Email */}

              <div>
                <div className="relative">
                  <FaEnvelope
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                    aria-label="Envelope"
                  />

                  <input
                    id="email"
                    {...register("email")}
                    placeholder="Email Address"
                    className="w-full rounded-xl border border-gray-300 py-4 pl-14 pr-5 outline-none focus:border-blue-700"
                    aria-invalid={errors.email}
                    aria-describedby="email-error"
                  />
                </div>

                <p id="email-error" className="mt-2 text-sm text-red-500">
                  {errors.email?.message}
                </p>
              </div>

              {/* Phone */}

              <div>
                <div className="relative">
                  <FaPhoneAlt
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                    aria-label="Phone"
                  />

                  <input
                    id="phone"
                    {...register("phone")}
                    placeholder="Phone Number"
                    className="w-full rounded-xl border border-gray-300 py-4 pl-14 pr-5 outline-none focus:border-blue-700"
                    aria-invalid={errors.phone}
                    aria-describedby="phone-error"
                  />
                </div>

                <p id="phone-error" className="mt-2 text-sm text-red-500">
                  {errors.phone?.message}
                </p>
              </div>

              {/* Subject */}

              <div>
                <div className="relative">
                  <FaTag
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                    aria-label="Tag"
                  />

                  <input
                    id="subject"
                    {...register("subject")}
                    placeholder="Subject"
                    className="w-full rounded-xl border border-gray-300 py-4 pl-14 pr-5 outline-none focus:border-blue-700"
                    aria-invalid={errors.subject}
                    aria-describedby="subject-error"
                  />
                </div>

                <p id="subject-error" className="mt-2 text-sm text-red-500">
                  {errors.subject?.message}
                </p>
              </div>

              {/* Message */}

              <div>
                <div className="relative">
                  <FaCommentDots
                    className="absolute left-5 top-7 text-gray-400"
                    aria-label="Message"
                  />

                  <textarea
                    id="message"
                    rows={6}
                    {...register("message")}
                    placeholder="Write your message..."
                    className="w-full rounded-xl border border-gray-300 py-4 pl-14 pr-5 outline-none focus:border-blue-700"
                    aria-invalid={errors.message}
                    aria-describedby="message-error"
                  />
                </div>

                <p id="message-error" className="mt-2 text-sm text-red-500">
                  {errors.message?.message}
                </p>
              </div>

              <button
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-700 py-4 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-70"
                aria-label="Send Message"
              >
                <FaPaperPlane />

                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* GOOGLE MAP */}

          <div className="overflow-hidden rounded-[30px] shadow-xl">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.0275116164275!2d73.04601817502798!3d20.91121278070888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0f50001238a01%3A0xaa396dc4725af887!2sShanti%20Food%20Product!5e0!3m2!1sen!2sin!4v1746720935733!5m2!1sen!2sin"
              className="h-full min-h-175 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
