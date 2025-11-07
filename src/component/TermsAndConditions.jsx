import React from 'react'
import Footer from './Footer'
import WelcomeMenu from './WelcomeMenu'

function TermsAndConditions() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-yellow-50 via-white to-orange-100">
      <WelcomeMenu />

      <main className="flex-grow px-6 py-16 max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold text-yellow-700 mb-6 text-center">Terms & Conditions</h1>
        <p className="mb-4">
          Welcome to <strong>Employee Portal</strong>. By using our services, you agree to comply with and be
          bound by the following terms and conditions.
        </p>

        <ol className="list-decimal pl-6 space-y-2">
          <li>Users must provide accurate information during registration.</li>
          <li>Unauthorized access, misuse, or data tampering is strictly prohibited.</li>
          <li>The portal reserves the right to modify content or services without notice.</li>
          <li>Violation of these terms may lead to account suspension or termination.</li>
        </ol>

        <p className="mt-6">
          Please review these terms regularly to stay informed about any updates. Continued use signifies acceptance.
        </p>
      </main>

      <Footer />
    </div>
  )
}

export default TermsAndConditions
