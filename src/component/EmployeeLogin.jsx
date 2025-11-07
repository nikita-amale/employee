// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Footer from "./Footer";
// import WelcomeMenu from "./WelcomeMenu";

// function EmployeeLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();


//     // Dummy authentication (You can replace this with real API logic)
//     if (email === "admin@portal.com" && password === "admin123") {
//       alert("Login Successful!");
//       navigate("/"); // Redirect to home page after login
//     } else {
//       alert("Invalid Credentials");
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       <WelcomeMenu />

//       <main className="flex-grow flex items-center justify-center">
//         <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
//           <h2 className="text-3xl font-semibold text-center text-black-700 mb-6">
//             Employee Login
//           </h2>

//           <form onSubmit={handleLogin} className="space-y-5">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 placeholder="Enter your email"
//                 className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 placeholder="Enter your password"
//                 className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
//             >
//               Login
//             </button>

//             <p className="text-center text-sm text-gray-600 mt-4">
//               Don’t have an account?{" "}
//               <a
//                 href="/register"
//                 className="text-blue-600 hover:underline font-medium"
//               >
//                 Register here
//               </a>
//             </p>
//           </form>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default EmployeeLogin;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import WelcomeMenu from "./WelcomeMenu";

function EmployeeLogin() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No user found! Please register first.");
      return;
    }

    if (
      credentials.email === storedUser.email &&
      credentials.password === storedUser.password
    ) {
      alert("Login successful!");
      navigate("/dashboard", { state: { user: storedUser } });
    } else {
      alert("Invalid credentials! Please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <WelcomeMenu />

      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-semibold text-center text-blue-700 mb-6">
            Employee Login
          </h2>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>

            <p className="text-center text-sm text-gray-600 mt-4">
              Don’t have an account?{" "}
              <Link to={'/register'}
                className="text-blue-600 hover:underline font-medium"
              >
                Register here
              </Link>
            </p>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default EmployeeLogin;
