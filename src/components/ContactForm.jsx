"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log("response", data);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      <section className="bg-blue-50 mt-16" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <h2 className="constctTitle flex justify-center font-heading mb-4 font-bold tracking-tight text-gray-900 text-3xl sm:text-5xl">
                Get in Touch
              </h2>
            </div>
          </div>
          <div className="justify-center">
            <div className="grid md:grid-cols-2">
              {/* Image here */}
              <div className="imageSection max-w-full max-h-[200px] md:max-h-[400px]">
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-3483604-2912020.png"
                  alt=""
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div
                className="card h-fit max-w-6xl md:p-12 mt-[2rem] "
                id="form"
              >
                <p className="mb-4 contactSubTitle">Ready to Get Started?</p>
                <form id="contactForm" onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="name"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="text"
                        id="name"
                        autoComplete="given-name"
                        placeholder="Your name"
                        className="mb-2 w-full border border-gray-500 py-2 pl-2 pr-4 shadow-md focus:border-blue-500 sm:mb-0"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="email"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="email"
                        id="email"
                        autoComplete="email"
                        placeholder="Your email address"
                        className="mb-2 w-full border border-gray-500 py-2 pl-2 pr-4 shadow-md focus:border-blue-500 sm:mb-0"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="phone"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="tel"
                        id="phone"
                        autoComplete="tel"
                        placeholder="Your phone number"
                        className="mb-2 w-full border border-gray-500 py-2 pl-2 pr-4 shadow-md focus:border-blue-500 sm:mb-0"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="message"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <textarea
                        id="message"
                        name="message"
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        className="mb-2 w-full border border-gray-500 py-2 pl-2 pr-4 shadow-md focus:border-blue-500 sm:mb-0"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
