'use client'

import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    college: "",
    branch: "",
    year: "",
  });

  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://script.google.com/macros/s/AKfycbyy-nv6M99QUGk1im-cR8Mo0P7uIX_e3hNH3XjjyDSkhrJ9d_EvEMI8Md60zjd9ZKK5bg/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Submission failed", err);
    }
  };

  return (
    <section className="max-w-3xl mx-auto my-12 px-4">
      {!showForm ? (
        // Welcome Card
        <div className="bg-white shadow-md p-6 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-cyan-950 mb-4">
            🎉 Welcome to Campus Code Dev Fest!
          </h2>
          <p className="text-gray-700 mb-6">
            Dive into a day of innovation, learning, and networking. Don't miss your chance to be part of this amazing journey!
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="bg-teal-500 text-white px-6 py-3 rounded hover:bg-teal-600 transition duration-300"
          >
            Register Now
          </button>
        </div>
      ) : (
        // Registration Form
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-center">Register Now</h3>
          {submitted ? (
            <p className="text-green-600 font-medium text-center">✅ Thank you for registering!</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {["name", "email", "contact", "college", "branch", "year"].map((field) => (
                <input
                  key={field}
                  type="text"
                  name={field}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
              ))}
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      )}
    </section>
  );
}
