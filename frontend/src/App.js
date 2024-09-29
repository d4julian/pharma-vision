import "./App.css";
import WebcamCapture from "./WebcamCapture";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Doctor from "./pages/Doctor";
import SignInSide from './components/sign-in-side/SignInSide';


function App() {
  const [mode, toggleColorMode] = useDarkMode();

  return (
    <Router>
      <Routes>
      <Route path="/" element={<SignInSide />} />        <Route path="/doctor" element={<Doctor />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
