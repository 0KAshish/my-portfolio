"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thanks for reaching out! I’ll get back to you soon 🚀");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-white dark:bg-gray-900 py-20 px-6 sm:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
          Get In <span className="text-brand">Touch</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? Fill out the form below and I’ll respond as soon as possible.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto space-y-6 bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
      >
        <div>
          <label className="block text-left text-gray-700 dark:text-gray-200 font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-left text-gray-700 dark:text-gray-200 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-left text-gray-700 dark:text-gray-200 font-medium mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 bg-brand text-white rounded-lg font-medium hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
