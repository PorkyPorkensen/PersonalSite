import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Layout from "./components/Layout"
import About from "./pages/About"
import MyProjects from "./pages/MyProjects"
import Contact from "./pages/Contact"
import { LightModeProvider } from "./LightModeContext"
import AOS from "aos";


function App() {
    React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <BrowserRouter>
      <LightModeProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<About />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects" element={<MyProjects />} />
          </Route>
        </Routes>
      </LightModeProvider>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)