import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import landing_pg_backdrop from "../images/background-img.jpg";
import ContactCard from "./ContactCard";
import Projects from './Projects';
import ResumeIcon from "./ResumeIcon";
import LinkedinIcon from "./LinkedinIcon";
import SudokuSolver from './SudokuSolver';
import MoneyWhere from './MoneyWhere';
import Parkspace from './Parkspace';
import TcpChattingRoom from './TcpChattingRoom';
import LoopMania from './LoopMania';
import Chatter from './Chatter';

const navigatorStretch = {
  // position: 'fixed',
  height: '100%',
  width: '100%',
}

const contentContainer = {
  position: 'fixed',
  height: '100%',
  width: '100%',
}

const backgroundImg = {
  height: '100%',
  width: '100%',
  position: 'fixed',
  zIndex: '-1',
  
  opacity: '0.7',
  backgroundImage: `url(${landing_pg_backdrop})`,
  backgroundSize: 'cover',
  // backgroundPosition: 'center',
  top: '0px',
}

const LandingPage = () => {
  return (
    <div style={{height: '100vh',width: '100%'}}>
      <div style={{zIndex: '1'}}>
        <div className="d-flex align-items-start justify-content-end" style={navigatorStretch}>
          <div className="row p-2" style={{marginTop: '10px', marginRight: '5px'}}>
            <div className="col" style={{borderRight: '2px solid white'}}><a style={{textDecoration: 'none', color: 'white'}} href="/">Home</a></div>
            <div className="col" style={{borderRight: '2px solid white'}}><a style={{textDecoration: 'none', color: 'white'}} href="/about">About</a></div>
            <div className="col"><a style={{textDecoration: 'none', color: 'white'}} href="/projects">Projects</a></div>
          </div>
        </div>
        <Router>
          <Routes>
            <Route path='/' element={<ContactCard />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/projects/sudoku-solver' element={<SudokuSolver />} />
            <Route path='/projects/money-where' element={<MoneyWhere />} />
            <Route path='/projects/parkspace' element={<Parkspace />} />
            <Route path='/projects/tcp-chatting-room' element={<TcpChattingRoom />} />
            <Route path='/projects/loopmania' element={<LoopMania />} />
            <Route path='/projects/chatter' element={<Chatter />} />
          </Routes>
        </Router>
      </div>
      <div style={backgroundImg}></div>
    </div>
  )
}

export default LandingPage
