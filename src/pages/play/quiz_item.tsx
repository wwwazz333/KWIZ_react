import React from 'react';
import './quiz_item.css';


type QuizItemProps = {
	name: string;
	nbrQuestion: number;
}

export default function QuizItem(props : QuizItemProps) {
	return (
		<div className='quiz-item'>
			<h2>{props.name}</h2>
			<p>{props.nbrQuestion}</p>
		</div>
	);
}