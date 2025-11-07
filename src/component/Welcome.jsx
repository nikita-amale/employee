// import React from 'react'
// import WelcomeMenu from './WelcomeMenu'
// import Footer from './Footer'

// function Welcome() {
//   return (
//    <div>
//     <WelcomeMenu />
// <h1>
//   <a href="src/images/Welcome.jpeg"></a>
// </h1>
// <Footer />
//    </div>
  
//   )
// }

// export default Welcome



// import React from 'react'
// import WelcomeMenu from './WelcomeMenu'
// import Footer from './Footer'
// import employeeImg from '../images/images (1).jpeg' // ✅ correct way to import local image

// function Welcome() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Top Navbar */}
//       <WelcomeMenu />

//       {/* Main Content */}
//       <main className="flex-grow flex flex-col items-center justify-center bg-gray-50 p-6">
//         <h1 className="text-4xl font-bold text-blue-700 mb-6">
//           Welcome to the Employee Portal
//         </h1>

//         {/* Display Image */}
//         <img
//           src={employeeImg}
//           alt="Employee Portal"
//           className="w-80 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
//         />
//       </main>

//       {/* Footer Section */}
//       <Footer />
//     </div>
//   )
// }

// export default Welcome


// import React from 'react'
// import WelcomeMenu from './WelcomeMenu'
// import Footer from './Footer'
// import welcomeImg from '../images/welcome.jpg' // ✅ Make sure this image exists

// function Welcome() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Navbar */}
//       <WelcomeMenu />

//       {/* Main Section */}
//       <main className="flex-grow flex flex-col items-center justify-center bg-gray-50 p-6">
//         <h1 className="text-4xl font-extrabold text-blue-700 mb-6 text-center">
//           Welcome to the Employee Management Portal
//         </h1>
//         <p className="text-lg text-gray-600 mb-6 text-center max-w-xl">
//           Manage employee details, log in, and register easily with a modern and secure interface.
//         </p>

//         {/* Image */}
//         <img
//           src={welcomeImg}
//           alt="Employee"
//           className="w-96 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
//         />
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   )
// }

// export default Welcome


// import React from 'react'
// import WelcomeMenu from './WelcomeMenu'
// import Footer from './Footer'
// // import welcomeImg from '../images/Welcome.jpeg' // ✅ Correct import

// function Welcome() {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       {/* Navbar */}
//       <WelcomeMenu />

//       {/* Main Content */}
//       <main className="flex-grow flex flex-col items-center justify-center p-6">
//         <h1 className="text-4xl font-bold text-blue-700 mb-6">
//           Welcome to the Employee Portal
//         </h1>

//         {/* ✅ Image Display */}
//         <img
//           src={src/images/emp.png}
//           alt="Welcome"
//           className="w-96 h-auto rounded-lg shadow-lg hover:scale-109 transition-transform duration-300"
//         />
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   )
// }

// export default Welcome


// import React from 'react'
// import WelcomeMenu from './WelcomeMenu'
// import Footer from './Footer'
// import empImg from '../images/emp.png' // ✅ Import the image properly

// function Welcome() {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       {/* Navbar */}
//       <WelcomeMenu />

//       {/* Main Content */}
//       <main className="flex-grow flex flex-col items-center justify-center p-6">
//         <h1 className="text-4xl font-bold text-blue-700 mb-6">
//           Welcome to the Employee Portal
//         </h1>

//         {/* ✅ Image Display */}
//         <img
//           src={empImg} // Use the imported image
//           alt="Welcome"
//           className="w-150 h-auto rounded-lg shadow-lg hover:scale-150 transition-transform duration-500"
//         />
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   )
// }

// export default Welcome


import React from 'react'
import WelcomeMenu from './WelcomeMenu'
import Footer from './Footer'
import empImg from '../images/emp.png' // ✅ Correct image import
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-200">
      {/* Navbar */}
      <WelcomeMenu />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-12">
        
        {/* Title with animation */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-red-600 to-green-700 animate-pulse drop-shadow-lg mb-6">
          Welcome to the Employee Portal
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8">
          Streamline your work, manage attendance, and track your performance with ease.  
          Stay connected with your team and simplify daily operations!
        </p>

        {/* Image Section */}
        <div className="relative group">
          <img
            src={empImg}
            alt="Employee Portal"
            className="w-80 md:w-96 h-auto rounded-3xl shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 ease-in-out"
          />

          {/* Glowing Ring Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 opacity-0 group-hover:opacity-60 blur-2xl transition-opacity duration-700"></div>
        </div>

        {/* Button Section */}
        <div className="mt-10 flex flex-wrap gap-6 justify-center">
          <Link to={'/login'}
            
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:from-indigo-700 hover:to-blue-700 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
          >
            Login
          </Link>

          <Link to={'/Register'}
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold rounded-full shadow-lg hover:from-rose-700 hover:to-pink-700 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
          >
            Register
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Welcome

