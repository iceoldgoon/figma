import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import News from './pages/News';
import ProcessDetails from './pages/ProcessDetails';
import Career from './pages/Career';
import OurStory from './pages/OurStory';
import Services from './pages/Services';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/news" element={<News/>} />
      <Route path="/processDetails" element={<ProcessDetails/>} />
      <Route path="/career" element={<Career/>} />
      <Route path="/ourstory" element={<OurStory/>} />
      <Route path="/services" element={<Services/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
