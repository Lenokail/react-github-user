import React from 'react'
import classes from './Header.module.scss'

const Header = () => {
	const logo = 'react-github-user-app'

	return (
	<div className={classes.header}>
		<div className={classes.logo}>
		{ [...logo].map( (item, index) => 
			<span className={classes.item} key={index}>{item}</span>
		)}
		</div>
		<div className={classes.author}>@Lenokail</div>
	</div>
  )
}

export default Header