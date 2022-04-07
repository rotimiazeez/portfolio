import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/layout'
import Home from './components/Home/home'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
