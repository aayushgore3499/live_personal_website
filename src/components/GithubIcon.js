import GithubImg from "../images/github-img.png";

const btnStyle = {
	border: 'none',
	borderRadius: '50px',
  height: '50px', 
	width: '50px', 
	// backgroundPosition: 'center', 
	// backgroundRepeat: 'no-repeat', 
	backgroundSize: 'cover', 
	backgroundImage: `url(${GithubImg})`,
	cursor: 'pointer',
}

const GithubIcon = () => {
	const redirectGithub = () => {
		window.open('https://github.com/aayushgore3499','_blank')
	}
	return (
		<button style={btnStyle} onClick={redirectGithub}></button>
	)
}

export default GithubIcon
