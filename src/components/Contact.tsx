"use client"
import { FC, useState } from "react";

const Contact: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-accentDarkSecondary">
          Contact Me
        </h1>
        <p className="text-lg md:text-xl text-center max-w-2xl">
          Have a question or want to work together? Fill out the form below, and
          I’ll get back to you as soon as possible.
        </p>
      </section>

      {/* Form Section */}
      <section className="flex justify-center px-4 md:px-20 py-10">
        <div className="w-full max-w-3xl bg-secondary-light dark:bg-secondary-dark border rounded-lg p-8 shadow-2xl">
          {successMessage && (
            <div className="mb-6 p-4 bg-green-100 text-green-800 rounded dark:bg-green-900 dark:text-green-200">
              {successMessage}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-accentDarkPrimary focus:outline-none"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-accentDarkPrimary focus:outline-none"
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-accentDarkPrimary focus:outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-accentDarkPrimary text-white rounded hover:bg-accentDarkSecondary transition focus:ring-2 focus:ring-accentDarkSecondary focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

     
    </div>
  );
};

export default Contact;
