import { Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';

import Home from './pages/home';
import Intro from './pages/intro';
import Contract from './pages/contract';

export default function App() {
  return (
    <Router basename="/itis3135-react">
    <div id="page-wrapper">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction" element={<Intro />} />
          <Route path="/contract" element={<Contract />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </Router>
  );
}