import React from 'react'
import { BsFillGeoAltFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaMicroblog } from 'react-icons/fa';
import { FaCity } from 'react-icons/fa';
import classes from './Main.module.scss'

const Main = ({data}) => {

	const normalDate = (date) => {
		let ms = new Date(date);
		const dateString = 
		`	${ms.toLocaleString("en-US", {day: "numeric"})} 
			${ms.toLocaleString("en-US", {month: "short"})} 
			${ms.toLocaleString("en-US", {year: "numeric"})}
		`
		return dateString
	}

	const error = () => {
		return (
			<div>{data.message}</div>
		)
	}

	return (
	<div className={classes.main}>
		{data.message 
			? 
			error() 
			:
		<>
			<div className={classes.avatar}>
				<img src={data.avatar_url} alt='avatar'/>
			</div>
			<div className={classes.info}>
				<div className={classes.user}>
					<div className={classes.name}>{data.name ? data.name : 'No info'}</div>
					<div className={classes.date}>Joined {normalDate(data.created_at)}</div>
				</div>
				<div className={classes.nickname}>@{data.login}</div>
				<div className={classes.block}>
					<div className={classes.section}>
						<div className={classes.type}>Repos</div>
						<div className={classes.count}>{data.public_repos}</div>
					</div>
					<div className={classes.section}>
						<div className={classes.type}>Follower</div>
						<div className={classes.count}>{data.followers}</div>
					</div>
					<div className={classes.section}>
						<div className={classes.type}>Following</div>
						<div className={classes.count}>{data.following}</div>
					</div>
				</div>
				<div className={classes.more_info}>
					<div>
						<BsFillGeoAltFill className={classes.icon}/>
						<span>{data.location ? data.location : 'No info'}</span>
					</div>
					<div>
						<MdEmail className={classes.icon}/>
						<span>{data.email ? data.email : 'No info'}</span>
					</div>
					<div>
						<FaMicroblog className={classes.icon}/>
						<span>{data.blog ? data.blog : 'No info'}</span>
					</div>
					<div>
						<FaCity className={classes.icon}/>
						<span>{data.company ? data.company : 'No info'}</span>
					</div>
				</div>
			</div>
		</>
		}
	</div>
  )
}

export default Main