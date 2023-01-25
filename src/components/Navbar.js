// // Lib
// import React, { useState, useEffect } from 'react';

// // Others
// import navbar_back_img from "../images/navbar_back_img.png";
// import NavbarOption from './NavbarOption';

// const active = {
// 	position: 'fixed', 
// 	top: '0px',
// 	transition: '0.3s linear',
// 	height: '100px', 
// 	width: '600px', 
// 	backgroundColor: 'lightgrey', 
// 	backgroundImage: `url(${navbar_back_img})`,
// 	zIndex: '40',
	
// 	display: 'flex', 
// 	alignItems: 'end', 
// 	justifyContent: 'end',
// }

// const hidden = {
// 	position: 'fixed',
// 	top: '-160px',
// 	transition: '0.3s linear',
// 	height: '100px', 
// 	width: '600px', 
// 	backgroundColor: 'lightgrey', 
// 	backgroundImage: `url(${navbar_back_img})`,
// 	zIndex: '40',

// 	display: 'flex', 
// 	alignItems: 'end', 
// 	justifyContent: 'end',
// }

// const Navbar = (props) => {
// 	const [visible, setVisibility] = useState(true);
// 	const [lastScrollY, setLastScrollY] = useState(0);

// 	const controlNavbar = () => {
// 		if (typeof window !== 'undefined') { 
// 			if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
// 				setVisibility(false);
// 			} else { // if scroll up show the navbar
// 				setVisibility(true);
// 			}
// 			// remember current page location to use in the next move
// 			setLastScrollY(window.scrollY); 
// 		}
// 	};

// 	useEffect(() => {
// 		if (typeof window !== 'undefined') {
// 			window.addEventListener('scroll', controlNavbar);

// 			// cleanup function
// 			return () => {
// 				window.removeEventListener('scroll', controlNavbar);
// 			};
// 		}
// 	}, [lastScrollY]);

// 	return (
// 		<div style={visible ? active : hidden}>
// 			<NavbarOption value="Home" redirectTo="/"/>
// 			<NavbarOption value="Projects" redirectTo="/projects"/>
			
// 			{/* {props.elements.map((navbarItem) => (
// 				<NavbarButton text={navbarItem} />
// 			))} */}
// 		</div>
// 	)
// }

// export default Navbar