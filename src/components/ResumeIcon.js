import CvImg from "../images/cv-img.png";
import AayushGoreCv from "../docs/cv_aayush_gore.pdf";

const btnStyle = {
	border: 'none',
  borderRadius: '80%',
	height: '50px', 
	width: '50px', 
	// backgroundPosition: 'center', 
	// backgroundRepeat: 'no-repeat', 
	backgroundSize: 'cover', 
	backgroundImage: `url(${CvImg})`,
	cursor: 'pointer',
}

const ResumeIcon = () => {
	const redirectCv = () => {
		window.location.href = AayushGoreCv
		// window.open('https://au.linkedin.com/in/aayush-gore-b95203218','_blank')
	}
	return (
		<button style={btnStyle} onClick={redirectCv}></button>
	)
}

export default ResumeIcon
