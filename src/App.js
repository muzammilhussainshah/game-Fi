import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';
import { Route, Routes } from "react-router-dom";
import About from './pages/About';
import Team from './pages/Team';
import Career from './pages/Careers';
import Blog from './pages/Blog';
import Products from './pages/Products';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/career" element={<Career />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
