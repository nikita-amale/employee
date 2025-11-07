import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Panel.css";

function EmployeePanel() {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Fetch employee data from backend
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/register")
  //     .then((res) => {
  //       console.log("✅ Data received:", res.data);
  //       if (Array.isArray(res.data)) {
  //         setEmployees(res.data);
  //       } else {
  //         console.error("Unexpected response:", res.data);
  //         setError("Invalid data format received from server");
  //       }
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error("❌ API error:", err);
  //       setError("Failed to fetch data from backend");
  //       setLoading(false);
  //     });
  // }, []);


  useEffect(() => {
  axios
    .get("http://employee-crud-project.onrender.com/getAll")
    .then((res) => {
      console.log("✅ Employees fetched:", res.data);
      setEmployees(res.data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("❌ Error fetching employees:", err);
      setError("Failed to load employee data");
      setLoading(false);
    });
}, []);


  const handleLogout = () => {
    alert("You have been logged out!");
    navigate("/login");
  };

  return (
    <div className="panel-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Employee Panel</h2>
        <nav>
          <ul>
            <li><Link to="/home">🏠 Home</Link></li>
            <li><Link to="/panel">📋 Dashboard</Link></li>
            <li><Link to="/reports">📊 Reports</Link></li>
            <li><Link to="/settings">⚙️ Settings</Link></li>
          </ul>
        </nav>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header>
          <h1>Welcome to Employee Panel</h1>
          <p>Showing employee data from your backend.</p>
        </header>

        {/* Loading / Error */}
        {loading && <p>Loading employee data...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* Employee Data Table */}
        {!loading && !error && employees.length > 0 && (
          <section className="employee-table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Designation</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp, i) => (
                  <tr key={emp.id || i}>
                    <td>{emp.id || i + 1}</td>
                    <td>{emp.name || emp.fullName || "N/A"}</td>
                    <td>{emp.email || "N/A"}</td>
                    <td>{emp.department || "—"}</td>
                    <td>{emp.designation || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {!loading && !error && employees.length === 0 && (
          <p>No employee records found.</p>
        )}
      </main>
    </div>
  );
}

export default EmployeePanel;
