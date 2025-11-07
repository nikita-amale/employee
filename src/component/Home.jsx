import React from "react";
import { useNavigate } from "react-router-dom";
import WelcomeMenu from "./WelcomeMenu";
import Footer from "./Footer";

function Home() {
  const navigate = useNavigate();

  // Dummy user info (you can replace this with real user data from localStorage or backend)
  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "John Doe",
    email: "john.doe@example.com",
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("You have been logged out!");
    navigate("/login");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <WelcomeMenu />

      <main className="flex-grow flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Welcome, {user.name} 👋
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          This is your Employee Dashboard. You can manage your details, check updates, and explore company resources here.
        </p>

        <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md text-left">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Employee Information
          </h2>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Name:</span> {user.name}
          </p>
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">Email:</span> {user.email}
          </p>

          <button
            onClick={handleLogout}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Logout
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
