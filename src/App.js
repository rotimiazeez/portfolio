import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/layout'
import Home from './components/Home/home'
import About from './components/About/about'
import Contact from './components/Contact/contact'
import Portfolio from './components/Portfolio/portfolio';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='portfolio' element={<Portfolio />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
