import React, { useState } from "react";
import { FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

/* ---------------- SOCIAL DATA ---------------- */

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/web-developer-abdul-shakoor/",
    icon: FaLinkedin,
    color: "text-blue-500",
  },
  {
    name: "Upwork",
    href: "https://www.upwork.com/freelancers/~018b0769d2e1106355?mp_source=share",
    icon: SiUpwork,
    color: "text-green-500",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61589073781885",
    icon: FaFacebook,
    color: "text-blue-400",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/923023001606?text=Hi%20Abdul%20Shakoor",
    icon: FaWhatsapp,
    color: "text-green-400",
  },
];

/* ---------------- SOCIAL SIDEBAR ---------------- */

const SocialSidebar: React.FC = () => {
  return (
    <div className="z-50">

      {/* 🖥 DESKTOP SIDEBAR */}
      <div className="hidden sm:flex fixed left-4 top-0 h-full items-center">
        <div
          className="
            flex flex-col items-center justify-center gap-6
            py-8 px-4
            rounded-full
            bg-white/5 backdrop-blur-xl
            border border-white/10
            shadow-[0_10px_40px_rgba(0,0,0,0.35)]
            animate-float
          "
        >
          {socials.map(({ name, href, icon: Icon, color }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="
                group relative
                w-14 h-14
                flex items-center justify-center
                rounded-full
                transition-all duration-300
                hover:bg-white/10
                hover:scale-125
              "
            >
              <Icon className={`text-3xl ${color}`} />

              {/* Tooltip */}
              <span
                className="
                  absolute left-16
                  px-3 py-1 text-xs
                  bg-black/80 text-white
                  rounded-md
                  opacity-0 group-hover:opacity-100
                  translate-x-2 group-hover:translate-x-0
                  transition-all duration-300
                  whitespace-nowrap
                "
              >
                {name}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* 📱 MOBILE BOTTOM DOCK */}
      <div className="sm:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <div
          className="
            flex items-center gap-5
            bg-white/5 backdrop-blur-xl
            border border-white/10
            px-5 py-3
            rounded-full
            shadow-lg
          "
        >
          {socials.map(({ name, href, icon: Icon, color }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-10 h-10
                flex items-center justify-center
                rounded-full
                hover:scale-110 transition
              "
            >
              <Icon className={`text-2xl ${color}`} />
            </a>
          ))}
        </div>
      </div>

    </div>
  );
};

/* ---------------- CONTACT PAGE ---------------- */

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setSuccess(false), 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#071013] text-white px-4 py-14 relative overflow-hidden">

      {/* SOCIAL SIDEBAR */}
      <SocialSidebar />

      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          Contact Me
        </h1>
        <p className="text-gray-400 mt-3">
          Let’s build something amazing together
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Get in touch
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Have a project idea, freelance work, or collaboration in mind?
            Let’s connect and build something great.
          </p>

          <a
            href="https://wa.me/923023001606?text=Hi%20Abdul%20Shakoor"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              bg-green-500 hover:bg-green-600
              px-6 py-3 rounded-full
              font-semibold transition
              shadow-lg hover:shadow-green-500/20
            "
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* RIGHT SIDE - FORM */}
        <form
          onSubmit={handleSubmit}
          className="
            bg-[#0f1f24]
            p-6 md:p-8
            rounded-2xl
            border border-gray-700
            shadow-xl
            space-y-4
          "
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="
              w-full p-3 rounded
              bg-[#071013]
              border border-gray-600
              focus:border-green-500
              focus:ring-1 focus:ring-green-500
              outline-none transition
            "
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="
              w-full p-3 rounded
              bg-[#071013]
              border border-gray-600
              focus:border-green-500
              focus:ring-1 focus:ring-green-500
              outline-none transition
            "
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className="
              w-full p-3 rounded
              bg-[#071013]
              border border-gray-600
              focus:border-green-500
              focus:ring-1 focus:ring-green-500
              outline-none transition
            "
          />

          <button
            type="submit"
            disabled={loading}
            className="
              w-full bg-green-600 hover:bg-green-700
              transition p-3 rounded
              font-semibold
              disabled:opacity-60
            "
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-400 text-sm text-center">
              ✅ Message sent successfully!
            </p>
          )}
        </form>
      </div>

      {/* FLOAT ANIMATION */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

    </div>
  );
};

export default Contact;