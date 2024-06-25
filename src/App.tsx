import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MessageContent from './pages/MessageContent';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/message/:id" element={<MessageContent />} />
      </Routes>
    </Router>
  );
};

export default App;
