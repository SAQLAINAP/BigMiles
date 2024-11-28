import React from "react";

const ContactUs = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form className="max-w-lg mx-auto bg-white p-6 rounded shadow">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full border p-2 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full border p-2 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full border p-2 rounded"></textarea>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
