import ResumeIcon from "./ResumeIcon";
import YoutubeIcon from "./YoutubeIcon";
import LinkedinIcon from "./LinkedinIcon";
import GithubIcon from "./GithubIcon";

const contentContainer = {
  position: 'fixed',
  // border: '1px solid red',
  height: '100%',
  width: '100%',
}

const ContactCard = () => {
  return (
    <div className="d-flex align-items-center justify-content-center" style={contentContainer}>
      <div className="container h-50" style={{width: '560px'}}>
        <div className="row" style={{height: '75px'}}>
          <div className="col"></div>
          <div className="col d-flex align-items-center justify-content-center" style={{color: 'white', fontSize: '28px', borderBottom: '4px solid white'}}>Aayush Gore</div>
          <div className="col"></div>

          {/* <div className="col" style={{color: 'white', fontSize: '28px', borderBottom: '4px solid white'}}>
            Aayush Gore
          </div> */}
        </div>
        <div className="row" style={{height: '100px'}}>
          <div className="col d-flex align-items-center justify-content-center">
            <div style={{marginLeft: '15px', marginRight: '15px'}}><YoutubeIcon /></div>
            <div style={{marginLeft: '15px', marginRight: '15px'}}><LinkedinIcon/></div>
            <div style={{marginLeft: '15px', marginRight: '15px'}}><GithubIcon /></div>
            
            {/* <div className="border border-success col d-flex align-items-center justify-content-center"><LinkedinIcon/></div> */}
            {/* <div className="border border-success col d-flex align-items-center justify-content-center"><GithubIcon /></div> */}
          </div>
          {/* <div className="col d-flex align-items-center justify-content-end"><LinkedinIcon/></div> */}
          {/* <div className="border border-success col d-flex align-items-center justify-content-end"><LinkedinIcon/></div> */}
          {/* <div className="border border-success col d-flex align-items-center justify-content-start"><GithubIcon /></div> */}
        </div>
      </div>
    </div>
  )
}

export default ContactCard
