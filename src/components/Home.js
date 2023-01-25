import LinkedinIcon from './LinkedinIcon';
import ResumeIcon from './ResumeIcon';

const Home = () => {
	return (
		<div>
			<div style={{fontSize: '14px'}}>
				<h1>Hello!</h1>
				<h1>Welcome to Aayush Gore's blog.</h1><br />
			</div>
			<div style={{fontSize: '17px'}}>
				<p>I'm a computer science student majoring in Cyber Security at UNSW, currently in my final year.
						I enjoy binary exploitation and this website is a showcase of my projects.</p>
				<p>P.S. My other hobbies are web dev, photography, tennis.</p>
				<p>I'm not language dependant but one of my favourite programming languages is: Java..</p>
				<p>Due to its object-oriented nature!</p>
				<br />
				<p>Find me on Linkedin here:</p>
				<LinkedinIcon />
				<p>Or contact me via <a href="/contact">email.</a></p>
				{/* <p>My github is:</p>
				<GithubIcon /> */}
				<p>View my personal resume:</p>
				<ResumeIcon />
			</div>
		</div>
	)
}

export default Home
