import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'

export default function NavBar() {
	return (
		<div className={'navigation'}>
			<h1>KWIZ</h1>
			<nav>
				<NavLink to={'/'}>HOME</NavLink>
				<NavLink to={'/second'}>Second</NavLink>
			</nav>

		</div>
	);
}