import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Nav from './components/Nav';
import Landing from './pages/Landing';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Nav />
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
