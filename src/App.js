// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects';
import LandingPage from './components/LandingPage';


// import 'bootstrap/dist/css/bootstrap.min.css'

{/* <Navbar />
<div style={{backgroundColor: 'white', marginTop: '250px', marginBottom: '100px', width: '650px', padding: '100px'}}>
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  </Router>
</div> */}

function App() {
	return (
    <LandingPage />
	);
}

export default App;
