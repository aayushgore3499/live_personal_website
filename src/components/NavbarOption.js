const divStyle = {
	marginRight: '35px', 
	marginBottom: '10px', 
	height: '50px', 
	display: 'flex', 
	alignItems: 'end', 
	justifyContent: 'center'
}

const anchorStyle = {
	borderBottom: '4px solid transparent', 
	color: 'black', 
	fontSize: '18px', 
	textDecoration: 'none'
}

const NavbarOption = ({value, redirectTo}) => {
	return (
		<div style={divStyle}>
			{/* borderBottom: '4px solid grey', color: 'rgb(232,110,0)',  */}
			<a href={redirectTo} style={anchorStyle}>{value}</a>
		</div>
	)
}

export default NavbarOption
