import React, { useState } from "react";

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

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

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

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => setSuccess(false), 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#071013] text-white px-4 py-12">

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <p className="text-gray-400 mt-2">Let’s work together</p>
      </div>

      {/* Layout */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Left Side */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-2xl font-semibold">Get in touch</h2>

          <p className="text-gray-400">
            Have a project or idea? Send me a message or chat directly on WhatsApp.
          </p>

          <a
            href="https://wa.me/923023001606?text=Hi%20Abdul%20Shakoor%2C%20I%20want%20to%20talk%20about%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold transition"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#0f1f24] p-6 rounded-2xl shadow-xl space-y-4 border border-gray-700"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-[#071013] border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-[#071013] border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-[#071013] border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 transition p-3 rounded font-semibold disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Success Message */}
          {success && (
            <p className="text-green-400 text-sm text-center">
              ✅ Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;