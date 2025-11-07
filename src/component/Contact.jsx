import React from 'react'
import Footer from './Footer'
import WelcomeMenu from './WelcomeMenu'

function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-white to-purple-100">
      <WelcomeMenu />

      <main className="flex-grow px-6 py-16 text-center">
        <h1 className="text-5xl font-bold text-indigo-700 mb-8">Contact Us</h1>
        <p className="text-gray-700 mb-6">
          Have any questions, feedback, or suggestions? We’d love to hear from you.
        </p>

        <form className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-8">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-all"
          >
            Send Message
          </button>
        </form>
      </main>

      <Footer />
    </div>
  )
}

export default Contact
