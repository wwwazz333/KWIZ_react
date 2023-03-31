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
	let checkedAnswer: AnswerQuiz[] = [];


	return (
		<div>
			<h1>Selectionnez</h1>
			<ul>
				{props.answers.map((answer) => {
					let checked = false;
					const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
						checked = event.target.checked;
						if (checked) {
							checkedAnswer.push(answer);
						} else {
							checkedAnswer = checkedAnswer.filter((a) => a.id !== answer.id);
						}
					}
					return (
						<li><label >{answer.answer} <input type="checkbox" name="" id="" onChange={onChange} /></label></li>

					)
				})}
			</ul>

			<button onClick={() => props.submitAnswer(checkedAnswer)}>Valider</button>
		</div>
	);
}