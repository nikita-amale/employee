import React from 'react'
import Footer from './Footer'
import WelcomeMenu from './WelcomeMenu'

function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 via-white to-purple-100">
      <WelcomeMenu />

      <main className="flex-grow px-6 py-16 max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold text-pink-700 mb-6 text-center">Privacy Policy</h1>
        <p className="mb-4">
          At <strong>Employee Portal</strong>, your privacy is our top priority. We collect minimal personal
          information only for improving the user experience and providing essential services.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>We never share your personal data with third parties without consent.</li>
          <li>All information is stored securely in encrypted databases.</li>
          <li>You can request data deletion or updates at any time.</li>
        </ul>
        <p className="mt-6">
          By using our platform, you agree to our data handling practices in compliance with industry standards.
        </p>
      </main>

      <Footer />
    </div>
  )
}

export default PrivacyPolicy
