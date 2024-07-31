import './App.css'
import About from "./page/About";
import Blog from "./page/Blog";
import BlogDetai1 from "./page/BlogDetail1";
import FAQS from "./page/FAQS";
import Home from "./page/Home";
import { Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import BlogDetail2 from './page/BlogDetail2';
import BlogDetail3 from './page/BlogDetail3';
import BlogDetail4 from './page/BlogDetail4';

function App() {
  return (
    <>
      <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/faq" element={<FAQS />} />
        <Route path="/detail1" element={<BlogDetai1/>} />
        <Route path="/detail2" element={<BlogDetail2/>} />
        <Route path="/detail3" element={<BlogDetail3/>} />
        <Route path="/detail4" element={<BlogDetail4/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
    </>
  );
}

export default App;
