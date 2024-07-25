import CustomButton from "./components/CustomButton";
import CustomCheckbox from "./components/CustomCheckbox";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import SignUpModal from "./components/SignUpModal";
import SuccessMessage from "./components/SuccessMessage";
import About from "./page/About";
import Blog from "./page/Blog";
import BlogDetail from "./page/BlogDetail";
import FAQS from "./page/FAQS";
import Home from "./page/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <>
      {/* <Blog/> */}
      {/* <Home /> */}
      {/* <BlogDetail/> */}
      {/* <FAQS /> */}
      <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/faq" element={<FAQS />} />
        <Route path="/detail" element={<BlogDetail/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
    </>
  );
}

export default App;
