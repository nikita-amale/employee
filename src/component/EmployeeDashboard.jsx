// import axios from "axios";
// import { useEffect, useState } from "react";

// function EmployeeDashboard() {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/getAll")
//       .then((response) => setEmployees(response.data))
//       .catch(() => console.log("Something went wrong"));
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
//       <div className="w-full max-w-5xl bg-white shadow-xl rounded-2xl p-6">
//         <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
//           Employee Dashboard
//         </h1>

//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
//             <thead className="bg-blue-600 text-white">
//               <tr>
//                 <th className="py-3 px-4 text-left">#</th>
//                 <th className="py-3 px-4 text-left">ID</th>
//                 <th className="py-3 px-4 text-left">Name</th>
//                 <th className="py-3 px-4 text-left">Email</th>
//                 <th className="py-3 px-4 text-left">Password</th>
//               </tr>
//             </thead>

//             <tbody className="divide-y divide-gray-100">
//               {employees.length > 0 ? (
//                 employees.map((emp, index) => (
//                   <tr
//                     key={index}
//                     className="hover:bg-blue-50 transition-colors duration-200"
//                   >
//                     <td className="py-3 px-4">{index + 1}</td>
//                     <td className="py-3 px-4">{emp.id}</td>
//                     <td className="py-3 px-4 font-medium text-gray-800">
//                       {emp.name}
//                     </td>
//                     <td className="py-3 px-4">{emp.email}</td>
//                     <td className="py-3 px-4 text-gray-600">{emp.password}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td
//                     colSpan="5"
//                     className="text-center py-6 text-gray-500 italic"
//                   >
//                     No employees found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EmployeeDashboard;


// import axios from "axios";
// import { useEffect, useState } from "react";

// function EmployeeDashboard() {
//   const [employees, setEmployees] = useState([]);
//   const [editEmployee, setEditEmployee] = useState(null);
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });

//   // Fetch all employees
//   const fetchEmployees = () => {
//     axios
//       .get("http://localhost:8080/getAll")
//       .then((response) => setEmployees(response.data))
//       .catch(() => console.log("Something went wrong"));
//   };

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   // Handle delete
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this employee?")) {
//       axios
//         .delete(`http://localhost:8080/delete?id=${id}`)
//         .then(() => {
//           alert("Employee deleted successfully!");
//           fetchEmployees();
//         })
//         .catch(() => alert("Delete failed!"));
//     }
//   };

//   // Handle edit button click
//   const handleEdit = (emp) => {
//     setEditEmployee(emp);
//     setFormData({ name: emp.name, email: emp.email, password: emp.password });
//   };

//   // Handle update form submit
//   const handleUpdate = (e) => {
//     e.preventDefault();
//     axios
//       .put("http://localhost:8080/update", { id: editEmployee.id, ...formData })
//       .then(() => {
//         alert("Employee updated successfully!");
//         setEditEmployee(null);
//         fetchEmployees();
//       })
//       .catch(() => alert("Update failed!"));
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
//       <div className="w-full max-w-5xl bg-white shadow-xl rounded-2xl p-6">
//         <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
//           Employee Dashboard
//         </h1>

//         {/* Update Form */}
//         {editEmployee && (
//           <form
//             onSubmit={handleUpdate}
//             className="mb-6 p-4 border border-blue-300 rounded-lg bg-blue-50"
//           >
//             <h2 className="text-xl font-semibold text-blue-700 mb-3">
//               Update Employee (ID: {editEmployee.id})
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 className="border rounded-lg p-2 w-full"
//                 required
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 className="border rounded-lg p-2 w-full"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                 className="border rounded-lg p-2 w-full"
//                 required
//               />
//             </div>
//             <div className="mt-4 flex justify-end space-x-3">
//               <button
//                 type="submit"
//                 className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
//               >
//                 Update
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setEditEmployee(null)}
//                 className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         )}

//         {/* Employee Table */}
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
//             <thead className="bg-blue-600 text-white">
//               <tr>
//                 <th className="py-3 px-4 text-left">#</th>
//                 <th className="py-3 px-4 text-left">ID</th>
//                 <th className="py-3 px-4 text-left">Name</th>
//                 <th className="py-3 px-4 text-left">Email</th>
//                 <th className="py-3 px-4 text-left">Password</th>
//                 <th className="py-3 px-4 text-center">Actions</th>
//               </tr>
//             </thead>

//             <tbody className="divide-y divide-gray-100">
//               {employees.length > 0 ? (
//                 employees.map((emp, index) => (
//                   <tr
//                     key={index}
//                     className="hover:bg-blue-50 transition-colors duration-200"
//                   >
//                     <td className="py-3 px-4">{index + 1}</td>
//                     <td className="py-3 px-4">{emp.id}</td>
//                     <td className="py-3 px-4 font-medium text-gray-800">
//                       {emp.name}
//                     </td>
//                     <td className="py-3 px-4">{emp.email}</td>
//                     <td className="py-3 px-4 text-gray-600">{emp.password}</td>
//                     <td className="py-3 px-4 text-center space-x-2">
//                       <button
//                         onClick={() => handleEdit(emp)}
//                         className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 transition"
//                       >
//                         Update
//                       </button>
//                       <button
//                         onClick={() => handleDelete(emp.id)}
//                         className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td
//                     colSpan="6"
//                     className="text-center py-6 text-gray-500 italic"
//                   >
//                     No employees found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EmployeeDashboard;


// import axios from "axios";
// import { useEffect, useState } from "react";

// function EmployeeDashboard() {
//   const [employees, setEmployees] = useState([]);
//   const [editEmployee, setEditEmployee] = useState(null);
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });

//   // Fetch all employees
//   const fetchEmployees = () => {
//     axios
//       .get("http://localhost:8080/getAll")
//       .then((response) => setEmployees(response.data))
//       .catch(() => console.log("Something went wrong"));
//   };

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   // Handle delete
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this employee?")) {
//       axios
//         .delete(`http://localhost:8080/delete?id=${id}`)
//         .then(() => {
//           alert("Employee deleted successfully!");
//           fetchEmployees();
//         })
//         .catch(() => alert("Delete failed!"));
//     }
//   };

//   // Handle edit
//   const handleEdit = (emp) => {
//     setEditEmployee(emp);
//     setFormData({ name: emp.name, email: emp.email, password: emp.password });
//   };

//   // Handle update
//   const handleUpdate = (e) => {
//     e.preventDefault();
//     axios
//       .put("http://localhost:8080/update", { id: editEmployee.id, ...formData })
//       .then(() => {
//         alert("Employee updated successfully!");
//         setEditEmployee(null);
//         fetchEmployees();
//       })
//       .catch(() => alert("Update failed!"));
//   };

//   // Cancel editing
//   const handleCancel = () => {
//     setEditEmployee(null);
//     setFormData({ name: "", email: "", password: "" });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
//       <div className="w-full max-w-5xl bg-white shadow-xl rounded-2xl p-6">
//         <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
//           Employee Dashboard
//         </h1>

//         {/* Edit / Update Form */}
//         {editEmployee && (
//           <form
//             onSubmit={handleUpdate}
//             className="mb-6 p-4 border border-blue-300 rounded-lg bg-blue-50"
//           >
//             <h2 className="text-xl font-semibold text-blue-700 mb-3">
//               Edit Employee (ID: {editEmployee.id})
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 className="border rounded-lg p-2 w-full"
//                 required
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 className="border rounded-lg p-2 w-full"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                 className="border rounded-lg p-2 w-full"
//                 required
//               />
//             </div>
//             <div className="mt-4 flex justify-end space-x-3">
//               <button
//                 type="submit"
//                 className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
//               >
//                 Update
//               </button>
//               <button
//                 type="button"
//                 onClick={handleCancel}
//                 className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         )}

//         {/* Employee Table */}
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
//             <thead className="bg-blue-600 text-white">
//               <tr>
//                 <th className="py-3 px-4 text-left">#</th>
//                 <th className="py-3 px-4 text-left">ID</th>
//                 <th className="py-3 px-4 text-left">Name</th>
//                 <th className="py-3 px-4 text-left">Email</th>
//                 <th className="py-3 px-4 text-left">Password</th>
//                 <th className="py-3 px-4 text-center">Actions</th>
//               </tr>
//             </thead>

//             <tbody className="divide-y divide-gray-100">
//               {employees.length > 0 ? (
//                 employees.map((emp, index) => (
//                   <tr
//                     key={index}
//                     className="hover:bg-blue-50 transition-colors duration-200"
//                   >
//                     <td className="py-3 px-4">{index + 1}</td>
//                     <td className="py-3 px-4">{emp.id}</td>
//                     <td className="py-3 px-4 font-medium text-gray-800">
//                       {emp.name}
//                     </td>
//                     <td className="py-3 px-4">{emp.email}</td>
//                     <td className="py-3 px-4 text-gray-600">{emp.password}</td>
//                     <td className="py-3 px-4 text-center space-x-2">
//                       {/* ✅ Edit Button */}
//                       <button
//                         onClick={() => handleEdit(emp)}
//                         className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 transition"
//                       >
//                         Edit
//                       </button>
//                       {/* ✅ Delete Button */}
//                       <button
//                         onClick={() => handleDelete(emp.id)}
//                         className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td
//                     colSpan="6"
//                     className="text-center py-6 text-gray-500 italic"
//                   >
//                     No employees found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EmployeeDashboard;


import axios from "axios";
import { useEffect, useState } from "react";

function EmployeeDashboard() {
  const [employees, setEmployees] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  // Fetch all employees
  const fetchEmployees = () => {
    axios
      .get("http://employee-crud-project.onrender.com/getAll")
      .then((response) => setEmployees(response.data))
      .catch(() => console.log("Something went wrong"));
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Handle delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      axios
        .delete(`http://employee-crud-project.onrender.com/delete?id=${id}`)
        .then(() => {
          alert("Employee deleted successfully!");
          fetchEmployees();
        })
        .catch(() => alert("Delete failed!"));
    }
  };

  // Handle edit
  const handleEdit = (emp) => {
    setEditEmployee(emp);
    setFormData({ name: emp.name, email: emp.email, password: emp.password });
  };

  // Handle update
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://employee-crud-project.onrender.com/update", { id: editEmployee.id, ...formData })
      .then(() => {
        alert("Employee updated successfully!");
        setEditEmployee(null);
        fetchEmployees();
      })
      .catch(() => alert("Update failed!"));
  };

  const handleCancel = () => {
    setEditEmployee(null);
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex flex-col items-center py-10 px-4">
      {/* Glass card container */}
      <div className="w-full max-w-6xl bg-white/10 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-white/20">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-white tracking-wide drop-shadow-lg">
            Employee Dashboard
          </h1>
          <button
            onClick={fetchEmployees}
            className="mt-4 md:mt-0 bg-white/20 hover:bg-white/30 text-white font-semibold px-5 py-2 rounded-full backdrop-blur-md border border-white/30 transition-all duration-200"
          >
            🔄 Refresh
          </button>
        </div>

        {/* Edit / Update Form */}
        {editEmployee && (
          <form
            onSubmit={handleUpdate}
            className="mb-6 p-6 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              ✏️ Edit Employee (ID: {editEmployee.id})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
                required
              />
              <input
                type="text"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
                required
              />
            </div>
            <div className="mt-5 flex justify-end space-x-3">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg transition-all duration-200 shadow-md"
              >
                💾 Save Changes
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-lg transition-all duration-200 shadow-md"
              >
                ❌ Cancel
              </button>
            </div>
          </form>
        )}

        {/* Employee Table */}
        <div className="overflow-x-auto bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg">
          <table className="min-w-full text-white divide-y divide-white/20">
            <thead className="bg-white/30">
              <tr>
                <th className="py-3 px-4 text-left font-semibold">#</th>
                <th className="py-3 px-4 text-left font-semibold">ID</th>
                <th className="py-3 px-4 text-left font-semibold">Name</th>
                <th className="py-3 px-4 text-left font-semibold">Email</th>
                <th className="py-3 px-4 text-left font-semibold">Password</th>
                <th className="py-3 px-4 text-center font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {employees.length > 0 ? (
                employees.map((emp, index) => (
                  <tr
                    key={index}
                    className="hover:bg-white/30 transition-all duration-200 text-white"
                  >
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4">{emp.id}</td>
                    <td className="py-3 px-4 font-medium">{emp.name}</td>
                    <td className="py-3 px-4">{emp.email}</td>
                    <td className="py-3 px-4">{emp.password}</td>
                    <td className="py-3 px-4 text-center space-x-3">
                      <button
                        onClick={() => handleEdit(emp)}
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-1 rounded-lg transition-all duration-200"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => handleDelete(emp.id)}
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-1 rounded-lg transition-all duration-200"
                      >
                        🗑️ Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-8 text-gray-200 italic"
                  >
                    No employees found 😢
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
