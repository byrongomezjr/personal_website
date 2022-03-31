import TopBar from './components/topbar/TopBar';
import Home from './components/home/Home';
import Coding from './components/coding/Coding';
import Blog from './components/blog/Blog';
import Books from './components/books/Books';

import { Route, Routes } from 'react-router-dom';//new react router dom library, updated for version 6.2.2

import Footer from './components/footer/Footer';


/* eslint-disable react/jsx-no-undef */
function App() {
  return (
    <div>
    <TopBar />
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/coding" element={<Coding />} />
    <Route exact path="/blog" element={<Blog />} />
    <Route exact path="/books" element={<Books />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
