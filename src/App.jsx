import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="relative bg-gray-900 text-gray-100 min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
