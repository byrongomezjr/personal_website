import Home from './pages/home/Home.jsx';
import TopBar from './components/topbar/TopBar.jsx';
import Coding from './pages/coding/Coding.jsx';
import Blog from './pages/blog/Blog.jsx';

/* eslint-disable react/jsx-no-undef */
function App() {
  return (
    <>
    <TopBar/>
    <Home/>
    <Blog/>
    <Coding/>
    </>
  );
}

export default App;
