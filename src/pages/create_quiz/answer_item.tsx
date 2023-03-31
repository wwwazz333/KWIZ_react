import React from 'react';
import { NavLink } from 'react-router-dom';
import { QuestionQuiz } from '../../models/question_quiz';
import { Quiz } from '../../models/quiz';


type AnswerItemProps = {
	question: string;
}

export default function AnswerItem(props: AnswerItemProps) {
	return (
		<li>{props.question}</li>
	);
}