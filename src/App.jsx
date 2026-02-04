import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";
import Privacy from "./components/Privacy";
import Legal from "./components/Legal";

const Home = () => (
  <div className="min-h-screen overflow-hidden">
    <Hero />
    <About />
    <Resume />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
    </Router>
  );
}

export default App;
