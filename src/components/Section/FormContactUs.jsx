import React from "react";
import ContactPage from "./ContactUs";

function ContactForm() {
  return (
    <div className="min-h-screen flex flex-col items-start px-8 py-12 ">
      {/* Title */}
      <div className="w-full max-w-4xl mx-auto  mb-8">
        <h2 className="text-4xl font-bold  text-orange-500 mb-8 tracking-wider">
          CONTACT <span className="text-orange-500">US</span>
        </h2>

        {/* Form */}
        <form className="w-full mx-auto max-w-5xl space-y-6">
          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="mb-1 text-sm">First Name</label>
              <input
                type="text"
                className="border rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm">Last Name</label>
              <input
                type="text"
                className="border rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm">Email *</label>
            <input
              type="email"
              className="border rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm">Message</label>
            <textarea
              rows="4"
              className="border rounded-2xl px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>

          {/* Send Button */}
          <button
            type="submit"
            className="bg-teal-500 text-white rounded-full py-2 px-6 w-full hover:bg-teal-600 transition"
          >
            Send
          </button>
        </form>
      </div>
      <ContactPage />
    </div>
  );
}

export default ContactForm;
