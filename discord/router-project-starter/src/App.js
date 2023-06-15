import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import { useState } from "react";

function App() {
  const [isloggedIn, setloggedIn] = useState(false);

  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <Navbar isloggedIn={isloggedIn} setloggedIn={setloggedIn} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setloggedIn={setloggedIn}  />} />
        <Route path="/signup" element={<Signup setloggedIn={setloggedIn}/>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
