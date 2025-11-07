import { Routes, Route } from 'react-router-dom'
import './App.css'
import Welcome from './component/Welcome'
import EmployeeLogin from './component/EmployeeLogin'
import EmployeeRegister from './component/EmployeeRegister'
import Home from './component/HOme'
import TermsAndConditions from './component/TermsAndConditions'
import About from './component/About'
import PrivacyPolicy from './component/PrivacyPolicy'
import Contact from './component/Contact'
import EmployeePanel from './component/EmployeePanel'
import EmployeeDashboard from './component/EmployeeDashboard'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
      <Route path="/Login" element={<EmployeeLogin />} />
        {/* <Route path="/login" element={<EmployeeLogin/>} /> */}
        <Route path="/register" element={<EmployeeRegister/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/ terms" element={<TermsAndConditions/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/parivacy" element={<PrivacyPolicy/>}/>
        <Route path="/contact" element={<Contact/>}/>
         <Route path="/panel" element={<EmployeePanel/>}/>
         <Route path="/dashboard" element={<EmployeeDashboard/>}/>
        
        
      </Routes>
      </>
  
  )
}

export default App

