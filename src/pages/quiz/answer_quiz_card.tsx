import React from 'react';
import { NavLink } from 'react-router-dom';
import { AnswerQuiz } from '../../models/answer_quiz';
import { QuestionQuiz } from '../../models/question_quiz';
import { Quiz } from '../../models/quiz';


type AnswerQuizCardProps = {
	answers: AnswerQuiz[];
	submitAnswer: (answers: AnswerQuiz[]) => void
}

export default function AnswerQuizCard(props: AnswerQuizCardProps) {
	return (
		<div>
			<h1>Selectionnez</h1>
			{props.answers.map((answer) => (
				<p>{answer.answer}</p>
			))}

			<button onClick={() => props.submitAnswer([])}>Valider</button>
		</div>
	);
}