import './App.css'
import About from "./page/About";
import Blog from "./page/Blog";
import BlogDetail from "./page/BlogDetail";
import FAQS from "./page/FAQS";
import Home from "./page/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import ModalCookies from './components/ModalCookies';

function App() {
  return (
    <>
      <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/faq" element={<FAQS />} />
        <Route path="/detail" element={<BlogDetail/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/cookies" element={<ModalCookies/>} />
      </Routes>
    </div>
    </>
  );
}

export default App;
