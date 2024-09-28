import "./App.css";
import WebcamCapture from "./WebcamCapture";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Doctor from "./pages/Doctor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/doctor" element={<Doctor />} />
      </Routes>
    </Router>
  );
}

export default App;
