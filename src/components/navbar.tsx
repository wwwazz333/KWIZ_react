import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
	return (
		<div className={'navigation'}>
			<NavLink to={'/'}>HOME</NavLink>
			<NavLink to={'/second'}>Second</NavLink>
		</div>
	);
}