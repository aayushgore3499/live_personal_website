import linkedinImg from "../images/linkedin-img.png";

const btnStyle = {
	border: 'none',
  borderRadius: '10px',
	height: '50px', 
	width: '50px', 
	// backgroundPosition: 'center', 
	// backgroundRepeat: 'no-repeat', 
	backgroundSize: 'cover', 
	backgroundImage: `url(${linkedinImg})`,
	cursor: 'pointer',
}

const LinkedinIcon = () => {
	const redirectToLinkedInProfile = () => {
		window.open('https://au.linkedin.com/in/aayush-gore-b95203218','_blank')
	}
	return (
		<button style={btnStyle} onClick={redirectToLinkedInProfile}></button>
	)
}

export default LinkedinIcon
