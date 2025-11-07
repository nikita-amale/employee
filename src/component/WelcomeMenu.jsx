// import React from 'react'
// // import { Link } from 'react-router-dom'
// function WelcomeMenu() {
//   return (
//     <div>
//       <nav>
//         <li><a href="/login"></a></li>

//       </nav>
//         {/* <h2>this is welcomeMenu</h2> */}
//         {/* <link to='/' ></link> */}
//     </div>
//   )
// }

// export default WelcomeMenu



// import React from 'react'
// import { Link } from 'react-router-dom'

// function WelcomeMenu() {
//   return (
//     <nav>
//       <ul>
//         <li><Link to="/login">Login</Link></li>
//       </ul>
//     </nav>
//   )
// }

// export default WelcomeMenu


// import React from 'react'
// import { Link } from 'react-router-dom'

// function WelcomeMenu() {
//   return (
//     <nav className="bg-blue-600 p-4 shadow-md">
//       <ul className="flex justify-center space-x-8">
//         <li>
//           <Link
//             to="/"
//             className="text-white text-lg font-medium hover:text-yellow-300 transition-colors duration-300"
//           >
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/login"
//             className="text-white text-lg font-medium hover:text-yellow-300 transition-colors duration-300"
//           >
//             Login
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/register"
//             className="text-white text-lg font-medium hover:text-yellow-300 transition-colors duration-300"
//           >
//             Register
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   )
// }

// export default WelcomeMenu


// import React from 'react'
// import { Link } from 'react-router-dom'

// function WelcomeMenu() {
//   return (
//     <nav className="bg-blue-600 text-white shadow-md p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo / Title */}
//         <h1 className="text-2xl font-bold tracking-wide">
//           Employee Portal
//         </h1>

//         {/* Navigation Links */}
//         <ul className="flex space-x-6">
//           <li>
//             <Link
//               to="/"
//               className="hover:text-yellow-300 text-lg font-medium transition duration-300"
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/login"
//               className="hover:text-yellow-300 text-lg font-medium transition duration-300"
//             >
//               Login
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/register"
//               className="hover:text-yellow-300 text-lg font-medium transition duration-300"
//             >
//               Register
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   )
// }

// export default WelcomeMenu


import React from 'react'
import { Link } from 'react-router-dom'

function WelcomeMenu() {
  return (
    <nav className="bg-blue-600 text-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          Employee Portal
        </h1>

        {/* Nav Links */}
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-300 text-lg font-medium transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="hover:text-yellow-300 text-lg font-medium transition duration-300"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="hover:text-yellow-300 text-lg font-medium transition duration-300"
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default WelcomeMenu
