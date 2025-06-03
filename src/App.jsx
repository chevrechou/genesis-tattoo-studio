import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
// import Artists from './pages/Artists';
// import FAQ from './pages/FAQ';
// import Aftercare from './pages/Aftercare';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
       <Route path='/about' element={<About />} />
         {/* <Route path='/artists' element={<Artists />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/aftercare' element={<Aftercare />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
