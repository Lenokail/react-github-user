import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import classes from './Search.module.scss'

const Search = ({getData}) => {
	const [username, setUsername] = useState('octocat')

	return (
	<div className={classes.search}>
		<div>
			<BsSearch/>
			<Input 
				placeholder='Search Github username...'
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
		</div>
		<Button onClick={() => getData(username)}>Search</Button>
	</div>
  )
}

export default Search