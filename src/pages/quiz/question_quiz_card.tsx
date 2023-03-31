import React from 'react';
import { NavLink } from 'react-router-dom';
import { QuestionQuiz } from '../../models/question_quiz';
import { Quiz } from '../../models/quiz';


type QuestionQuizCardProps = {
	quiz: Quiz;
	numQuestion: number;
	question: QuestionQuiz;
}

export default function QuestionQuizCard(props: QuestionQuizCardProps) {
	return (
		<div>
			<h1>{'Quiz : ' + props.quiz.name}</h1>
			<p>{'Question ' + props.numQuestion + " - " + props.question.question}</p>
		</div>
	);
}