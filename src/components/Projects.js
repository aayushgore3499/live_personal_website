import Project from "./Project"

// Project Imgs

import sudokuSolverLogo from "../images/sudoku.jpg";
import moneyWhereLogo from "../images/money-where.jpg";
import parkspaceLogo from "../images/parkspace.jpg";
import networkingLogo from "../images/networking.jpg";
import loopmaniaLogo from "../images/loopmania.jpg";
import chatterLogo from "../images/chatter.jpg";

// Project Imgs styles

const sudokuSolverLogoStyle = {
  height: '180px',
  width: '180px',

  borderRadius: '20px',
  
  // opacity: '0.7',
  backgroundImage: `url(${sudokuSolverLogo})`,
  backgroundSize: 'cover',
  // backgroundPosition: 'center',
  // top: '0px',
}

const moneyWhereLogoStyle = {
  height: '180px',
  width: '180px',

  borderRadius: '20px',
  
  // opacity: '0.7',
  backgroundImage: `url(${moneyWhereLogo})`,
  backgroundSize: 'cover',
  // backgroundPosition: 'center',
  // top: '0px',
}

const parkspaceLogoStyle = {
  height: '180px',
  width: '180px',

  borderRadius: '20px',
  
  // opacity: '0.7',
  backgroundImage: `url(${parkspaceLogo})`,
  backgroundSize: 'cover',
  // backgroundPosition: 'center',
  // top: '0px',
}

const networkingLogoStyle = {
  height: '180px',
  width: '180px',

  borderRadius: '20px',
  
  // opacity: '0.7',
  backgroundImage: `url(${networkingLogo})`,
  backgroundSize: 'cover',
  // backgroundPosition: 'center',
  // top: '0px',
}

const loopmaniaLogoStyle = {
  height: '180px',
  width: '180px',

  borderRadius: '20px',
  
  // opacity: '0.7',
  backgroundImage: `url(${loopmaniaLogo})`,
  backgroundSize: 'cover',
  // backgroundPosition: 'center',
  // top: '0px',
}

const chatterLogoStyle = {
  height: '180px',
  width: '180px',

  borderRadius: '20px',
  
  // opacity: '0.7',
  backgroundImage: `url(${chatterLogo})`,
  backgroundSize: 'cover',
  // backgroundPosition: 'center',
  // top: '0px',
}

const Projects = () => {
  return (
    <div className="container">
      <div className="row" style={{height: '20px'}}></div>
      <div className="row p-4" style={{marginLeft: '10px', marginBottom: '-10px', fontSize: '36px', color: 'white'}}>Projects</div>
      <div className="row p-5">

        <Project anchor="/projects/sudoku-solver" projTitle="Sudoku Solver" contentText="A complex Sudoku Solver engine I made myself capable of solving easy, medium and hard difficulty rated Sudoku puzzles." custStyle={sudokuSolverLogoStyle} />
        <Project anchor="/projects/money-where" projTitle="Money Where?" contentText="Real time conversion app that determines, based on which country's conversion rate, your wealth matches a rounded figure." custStyle={moneyWhereLogoStyle} />
        <Project anchor="/projects/parkspace" projTitle="ParkSpace" contentText="An app for managing car parking space supply and demand between provider and consumer." custStyle={parkspaceLogoStyle} />
        <Project anchor="/projects/tcp-chatting-room" projTitle="TCP Chatting Room" contentText="Talk to friends within a local area network using computer sockets! :)" custStyle={networkingLogoStyle} />
        <Project anchor="/projects/loopmania" projTitle="Loop Mania" contentText="An interactive, multi-leveled battling game where the main player is faced off with fighting different enemies on a 2D map. You can decide to design obstacles, sort/manage player inventory and also form towers to direct your main player towards victory!" custStyle={loopmaniaLogoStyle} />
        <Project anchor="/projects/chatter" projTitle="Chatter" contentText="A backend project accessible through API which enables users to direct message and be part of teams communication." custStyle={chatterLogoStyle} />

        <div className="row" style={{marginLeft: '0px', borderRadius: '20px', backgroundColor: 'white', height: '100px'}}>
          <div className="col d-flex align-items-center justify-content-center">
            <div style={{fontSize: '24px'}}>More Projects Coming Soon..!</div>
          </div>
        </div>

      </div>
      
      
      
      {/* <Project title="Binary Fuzzer" onClick="/binary_fuzzer"/>
      <Project title="USB Rubber Ducky Virus" onClick="/usb_rubber_ducky_virus"/>
      <Project title="Park Space User Application" onClick="/park_space_user_application"/>
      <Project title="Loop Mania Game Development" onClick="/loop_mania_game_development"/>
      <Project title="Sudoku Solver" onClick="/sudoku_solver"/> */}
    </div>
  )
}

export default Projects
