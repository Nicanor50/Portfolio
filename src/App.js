import Header from './Components/Header';
import './App.css';
import Navbar from './Components/Navbar';
import Project from './Components/Project';
import Skills from './Components/Skills';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Project />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
