import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import SectionHeading from "../common/SectionHeading";
import Container from "../common/Container";
import Button from "../common/Button";

const schema = yup.object({
  name: yup.string().required("Full Name is required"),

  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),

  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Enter valid 10 digit mobile number")
    .required("Phone number is required"),

  subject: yup.string().required("Subject is required"),

  message: yup
    .string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

const ContactSection = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);

    const formData = new FormData();

    formData.append("Name", data.name);
    formData.append("Email", data.email);
    formData.append("Phone", data.phone);
    formData.append("Subject", data.subject);
    formData.append("Message", data.message);

    // FormSubmit Settings
    formData.append("_captcha", "false");
    formData.append("_template", "table");
    formData.append(
      "_subject",
      "New Contact Form Submission - Shivaji Good Poha",
    );

    try {
      const response = await fetch(
        "https://formsubmit.co/zeelsharma1998@gmail.com",
        {
          method: "POST",
          body: formData,
        },
      );

      if (response.ok) {
        toast.success("Message sent successfully!");

        reset();
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error) {
      toast.error("Failed to send message.");
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <section className="bg-gray-100 py-24">
      <Container>
        {/* Heading */}

        <SectionHeading
          subtitle="Contact Us"
          title="Get In Touch"
          description="We'd love to hear from you. Feel free to contact us for dealership,
            wholesale orders, product inquiries or any other questions."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left */}

          <div>
            <div className="space-y-8">
              <div className="flex items-start gap-5 rounded-3xl bg-white p-6 shadow-md">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-700 text-xl text-white">
                  <FaPhoneAlt aria-label="Phone" />
                </div>

                <div>
                  <h3 className="text-xl font-bold">Phone</h3>

                  <p className="mt-2 text-gray-600">+91 76987 55577</p>
                </div>
              </div>

              <div className="flex items-start gap-5 rounded-3xl bg-white p-6 shadow-md">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-700 text-xl text-white">
                  <FaEnvelope aria-label="Email" />
                </div>

                <div>
                  <h3 className="text-xl font-bold">Email</h3>

                  <p className="mt-2 text-gray-600">
                    shivajigoodpoha@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 rounded-3xl bg-white p-6 shadow-md">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-700 text-xl text-white">
                  <FaMapMarkerAlt aria-label="Map Marker" />
                </div>

                <div>
                  <h3 className="text-xl font-bold">Address</h3>

                  <p className="mt-2 text-gray-600 leading-7">
                    Shanti Food Product
                    <br />
                    Satem Road, Pardi (Sarpore)
                    <br />
                    Navsari - 396433
                    <br />
                    Gujarat, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-3xl bg-white p-8 shadow-xl"
          >
            <div className="grid gap-6">
              <div>
                <input
                  id="name"
                  type="text"
                  placeholder="Full Name"
                  {...register("name")}
                  className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-blue-700"
                  aria-invalid={errors.name}
                  aria-describedby="name-error"
                />

                <p id="name-error" className="mt-1 text-sm text-red-500">
                  {errors.name?.message}
                </p>
              </div>

              <div>
                <input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  {...register("email")}
                  className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-blue-700"
                  aria-invalid={errors.email}
                  aria-describedby="email-error"
                />

                <p id="email-error" className="mt-1 text-sm text-red-500">
                  {errors.email?.message}
                </p>
              </div>

              <div>
                <input
                  id="phone"
                  type="text"
                  placeholder="Phone Number"
                  {...register("phone")}
                  className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-blue-700"
                  aria-invalid={errors.phone}
                  aria-describedby="phone-error"
                />

                <p id="phone-error" className="mt-1 text-sm text-red-500">
                  {errors.phone?.message}
                </p>
              </div>

              <div>
                <input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  {...register("subject")}
                  className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-blue-700"
                  aria-invalid={errors.subject}
                  aria-describedby="subject-error"
                />

                <p id="subject-error" className="mt-1 text-sm text-red-500">
                  {errors.subject?.message}
                </p>
              </div>

              <div>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Write your message..."
                  {...register("message")}
                  className="w-full resize-none rounded-xl border border-gray-300 p-4 outline-none transition focus:border-blue-700"
                  aria-invalid={errors.message}
                  aria-describedby="message-error"
                />

                <p id="message-error" className="mt-1 text-sm text-red-500">
                  {errors.message?.message}
                </p>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="rounded-xl w-full"
                aria-label="Send Message"
              >
                <FaPaperPlane />

                {loading ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
