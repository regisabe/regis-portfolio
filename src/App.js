import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
/*import ScrollToTop from './components/ScrollToTop';
/*import ThemeToggle from './components/ThemeToggle';*/

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Stats />
      <Experience />
      <Services />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;