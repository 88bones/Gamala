import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import NavBar from "./Components/NavBar";
import Shop from "./Pages/Shop";
import NewArrivals from "./Pages/NewArrivals";
import AboutUs from "./Pages/AboutUs";
import Register from "./Pages/Register";
import AdminDash from "./Pages/AdminDash";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/newarrivals" element={<NewArrivals />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admindash" element={<AdminDash />} />
      </Routes>
    </Router>
  );
}

export default App;
