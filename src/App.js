import './index.css';

import TopBar from './components/topbar/TopBar';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

import { Route, Routes } from 'react-router-dom';//new react router dom library, updated for version 6.2.2

import Footer from './components/footer/Footer';


/* eslint-disable react/jsx-no-undef */
function App() {

  return (
    <div className="App">
    <TopBar />
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/projects" element={<Projects />} />
    <Route exact path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
