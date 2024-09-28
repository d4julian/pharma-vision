import "./App.css";
import WebcamCapture from "./WebcamCapture";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import DoctorDashboard from "./DoctorDashboard/doctorDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/doctorDashboard" element={<DoctorDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
