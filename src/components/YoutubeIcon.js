
import youtubeImg from "../images/youtube.png";

const btnStyle = {
	border: 'none',
  borderRadius: '10px',
	height: '50px', 
	width: '50px', 
	backgroundPosition: 'center', 
	// backgroundRepeat: 'no-repeat', 
	backgroundSize: 'cover', 
	backgroundImage: `url(${youtubeImg})`,
	cursor: 'pointer',
}

const YoutubeIcon = () => {
  const redirectToLinkedInProfile = () => {
		window.open('https://www.youtube.com/@aayushgore101','_blank')
	}
  return (
    <button style={btnStyle} onClick={redirectToLinkedInProfile}></button>
  )
}

export default YoutubeIcon
