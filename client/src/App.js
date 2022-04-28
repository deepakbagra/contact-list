// react main App component to wrap ..
// .. nav bar, route home page and wrap footer component

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './component/Home';
import Navbar from './component/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
      </Routes>     
    </Router>
  );
}

export default App;
