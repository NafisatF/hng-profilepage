import "./App.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import ProfileLinks from "./pages/ProfileLinks";
import ContactMe from "./pages/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProfileLinks />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
