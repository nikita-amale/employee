// import React from 'react'

// function Footer() {
//   return (
//     <div>
//         <h1>this is footer</h1>

//     </div>
//   )
// }

// export default Footer




// import React from 'react'

// function Footer() {
//   return (
//     <footer className="bg-blue-600 text-white py-4 mt-10">
//       <div className="container mx-auto text-center">
//         <p className="text-sm">
//           © {new Date().getFullYear()} Employee Portal — All Rights Reserved.
//         </p>
//         <p className="text-sm mt-1">
//           Designed with ❤️ using <span className="font-semibold">React + Tailwind CSS</span>
//         </p>
//       </div>
//     </footer>
//   )
// }

// export default Footer



// import React from 'react'
// import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

// function Footer() {
//   return (
//     <footer className="bg-gradient-to-r from-violet-700 via-indigo-700 to-purple-700 text-white py-8 mt-10 shadow-inner relative overflow-hidden">
//       {/* Decorative glow circles */}
//       <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500 opacity-30 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-400 opacity-30 rounded-full blur-3xl"></div>

//       <div className="container mx-auto px-6 text-center relative z-10">
//         {/* Footer Title */}
//         <h2 className="text-2xl font-bold mb-2 tracking-wide text-white drop-shadow-lg">
//           Employee Portal
//         </h2>

//         {/* Quick Links */}
//         <div className="flex flex-wrap justify-center gap-6 text-sm mb-4">
//           <a href="/about" className="hover:text-yellow-300 transition-colors duration-300">About</a>
//           <a href="/contact" className="hover:text-yellow-300 transition-colors duration-300">Contact</a>
//           <a href="/privacy" className="hover:text-yellow-300 transition-colors duration-300">Privacy Policy</a>
//           <a href="/terms" className="hover:text-yellow-300 transition-colors duration-300">Terms of Service</a>
//         </div>

//         {/* Social Media Icons */}
//         <div className="flex justify-center space-x-6 text-xl mb-4">
//           <a href="#" className="hover:text-blue-300 transform hover:scale-125 transition-all duration-300">
//             <FaFacebook />
//           </a>
//           <a href="#" className="hover:text-sky-400 transform hover:scale-125 transition-all duration-300">
//             <FaTwitter />
//           </a>
//           <a href="#" className="hover:text-blue-200 transform hover:scale-125 transition-all duration-300">
//             <FaLinkedin />
//           </a>
//           <a href="#" className="hover:text-gray-300 transform hover:scale-125 transition-all duration-300">
//             <FaGithub />
//           </a>
//         </div>

//         {/* Divider Line */}
//         <div className="border-t border-white/30 w-2/3 mx-auto mb-3"></div>

//         {/* Copyright */}
//         <p className="text-sm text-gray-200">
//           © {new Date().getFullYear()} <span className="font-semibold text-yellow-300">Employee Portal</span> — All Rights Reserved.
//         </p>

//         <p className="text-xs mt-1 text-gray-300">
//           Designed with ❤️ using <span className="font-semibold text-yellow-200">React + Tailwind CSS</span>
//         </p>
//       </div>
//     </footer>
//   )
// }

// export default Footer


import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-800 text-white py-10 mt-10 relative overflow-hidden">
      {/* Decorative gradient glows */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-cyan-500 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-blue-500 opacity-25 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl font-extrabold mb-3 tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 drop-shadow-lg">
          Employee Portal
        </h2>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 text-sm mb-5">
          {[
            { name: "About", href: "/about" },
            { name: "Contact", href: "/contact" },
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Terms of Service", href: "/terms" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-gray-300 hover:text-cyan-300 transition-all duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-300 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-8 text-2xl mb-5">
          <a href="#" className="text-gray-300 hover:text-blue-400 transform hover:scale-125 transition-all duration-300">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-300 hover:text-sky-400 transform hover:scale-125 transition-all duration-300">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-300 hover:text-cyan-300 transform hover:scale-125 transition-all duration-300">
            <FaLinkedin />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transform hover:scale-125 transition-all duration-300">
            <FaGithub />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 w-2/3 mx-auto mb-4"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-cyan-300">Employee Portal</span> — All Rights Reserved.
        </p>

        <p className="text-xs mt-2 text-gray-400">
          Built with 💙 using <span className="font-semibold text-cyan-200">React + Tailwind CSS</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer

