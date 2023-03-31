import React from 'react';
import { NavLink } from 'react-router-dom';
import './quiz_item.css';


type QuizItemProps = {
	id: number;
	name: string;
	nbrQuestion: number;
}

export default function QuizItem(props: QuizItemProps) {
	return (
		<NavLink to={'show/' + props.id} className={'quiz-item'}>
				<h2>{props.name}</h2>
				<p>{props.nbrQuestion}</p>
		</NavLink>
	);
}