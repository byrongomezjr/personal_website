import TopBar from './components/topbar/TopBar';
import Home from './components/home/Home';
import Blog from './components/blog/Blog';
import Coding from './components/coding/Coding';

import { Route, Routes } from 'react-router-dom';//new react router dom library, updated for version 6.2.2

import Footer from './components/footer/Footer';


/* eslint-disable react/jsx-no-undef */
function App() {
  return (
    <div>
    <TopBar />
    <Routes>
    <Route exact path="/" element={<Home />} />
      <Route exact path="/blog" element={<Blog />} />
      <Route exact path="/coding" element={<Coding />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
