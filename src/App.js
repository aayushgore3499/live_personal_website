import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects';
import LandingPage from './components/LandingPage';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



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
