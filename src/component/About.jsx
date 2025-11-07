import React from 'react'
import Footer from './Footer'
import WelcomeMenu from './WelcomeMenu'

function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      <WelcomeMenu />

      <main className="flex-grow flex flex-col items-center justify-center text-center px-8 py-16">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-6">
          About Employee Portal
        </h1>
        <p className="max-w-3xl text-lg text-gray-700 leading-relaxed">
          The <span className="font-semibold text-indigo-700">Employee Portal</span> is designed to streamline
          organizational operations by managing attendance, leaves, and performance.  
          It connects employees and management, ensuring transparency, productivity, and a smooth workflow.
        </p>

        <p className="max-w-2xl mt-6 text-gray-600">
          Built using <strong>React</strong>, <strong>Tailwind CSS</strong>, and a secure backend — our goal is to make work management effortless and enjoyable.
        </p>
      </main>

      <Footer />
    </div>
  )
}

export default About
