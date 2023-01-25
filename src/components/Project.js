const Project = (props) => {
  return (
    <div className="row" style={{marginLeft: '0px', marginBottom: '30px', borderRadius: '20px', backgroundColor: 'white', height: '200px'}}>
      <div className="col-2 d-flex align-items-center justify-content-center" style={{marginLeft: '-20px', backgroundColor: 'lightgrey', borderRadius: '20px'}}>
        <div style={props.custStyle}></div>
      </div>
      <div className="col-10 d-flex align-items-center">
        <div className="row" style={{marginLeft: '15px'}}>
          <div className="row p-2 h-50 d-flex align-items-end" style={{fontSize: '18px'}}>
            <a href={props.anchor} style={{color: 'black'}}>{props.projTitle}</a>
          </div>
          <div className="row p-2 h-50 d-flex align-items-start" style={{marginLeft: '0px'}}>
            {props.contentText}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
