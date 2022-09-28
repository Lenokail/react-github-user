import Main from '../Main/Main';
import Search from '../Search/Search';
import Header from '../Header/Header';
import classes from './App.module.scss';
import { useEffect, useState } from 'react';

function App() {
	const [data, setData] = useState({})

	const getData = async (username) => {
		if (username) {
			fetch(`https://api.github.com/users/${username}`)
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch(() => setData({message: 'Not Found'}))
		} else {
			fetch(`https://api.github.com/users/octocat`)
			.then((response) => response.json())
			.then((data) => setData(data))
		}
	}

	useEffect(() => {
		getData('octocat')
	}, [])

	return (
    <div className={classes.app}>
		<div className={classes.wrapper}>
			<Header/>
			<Search getData={getData}/>
			<Main data={data}/>
		</div>
    </div>
  );
}

export default App;
