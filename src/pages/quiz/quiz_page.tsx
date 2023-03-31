import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { AnswerQuiz } from '../../models/answer_quiz';
import { apiUrl, fetchData } from '../../models/api';
import { QuestionQuiz } from '../../models/question_quiz';
import { Quiz } from '../../models/quiz';
import { ScoreQuiz } from '../../models/score_quiz';
import AnswerQuizCard from './answer_quiz_card';
import QuestionQuizCard from './question_quiz_card';


/**
 * 
 * @param answers contien les réponse donnée par l'utilisateur
 * @returns le score de l'utilisateur
 */
function calculeScore(answers: AnswerQuiz[]): number {
	let score = 0;
	for (const answer of answers) {
		if (answer.isCorrect) {
			score++;
		} else {
			score -= 0.5;
		}
	}
	return score;
}

export default function QuizPage() {
	const [numQuestion, setNumQuestion] = useState<number>(0);
	const [quiz, setQuiz] = useState<Quiz>();
	const [score, setScore] = useState<ScoreQuiz>();
	const [questionsQuiz, setQuestionQuiz] = useState<QuestionQuiz[]>([]);

	const [scoreTotale, setScoreTotale] = useState<number>(0);

	const { quizId } = useParams();


	useEffect(() => {
		//TODO: create ScoreQuiz and set it
		setScore({ id: 1, quizId: 1, score: 0, name: 'test' });
	}, []);

	useEffect(() => {
		//TODO: get quiz by id
		fetchData<Quiz>(`${apiUrl}/quiz/${quizId}`).then((quiz) => {
			setQuiz(quiz);
		});
	}, []);




	useEffect(() => {
		//TODO: get all question by quiz id
		fetchData<QuestionQuiz[]>(`${apiUrl}/question_quiz/for/${quizId}`).then((questions) => {
			setQuestionQuiz(questions);
		});

		// setQuestionQuiz([{
		// 	id: 1, question: 'Question 1', quizId: 1, answers: [
		// 		{ id: 1, questionId: 1, answer: "oui", isCorrect: true },
		// 		{ id: 2, questionId: 1, answer: "non", isCorrect: false },
		// 		{ id: 3, questionId: 1, answer: "heuu", isCorrect: true },
		// 		{ id: 4, questionId: 1, answer: "peut être", isCorrect: false },
		// 	]
		// }, {
		// 	id: 2, question: 'Question 2', quizId: 1, answers: [
		// 		{ id: 5, questionId: 2, answer: "oui", isCorrect: true },
		// 		{ id: 6, questionId: 2, answer: "non", isCorrect: false },
		// 		{ id: 7, questionId: 2, answer: "heuu", isCorrect: true },
		// 		{ id: 8, questionId: 2, answer: "peut être", isCorrect: true },
		// 	]
		// }]);
	}, []);

	useEffect(() => {
		let tempScore = 0;
		for (const question of questionsQuiz) {
			for (const answer of question.answers) {
				if (answer.isCorrect) {
					tempScore++;
				}
			}
		}
		setScoreTotale(tempScore);
	}, [questionsQuiz]);




	const submitAnswer = (answers: AnswerQuiz[]) => {
		if (score) {
			score.score += calculeScore(answers);
			setScore(score);
			setNumQuestion(numQuestion + 1);
		}
	}

	return (
		<div>
			{quiz == null && score && <h1>Pas de quiz</h1>}
			{quiz != null && questionsQuiz[numQuestion] && score && <>
				<QuestionQuizCard quiz={quiz} question={questionsQuiz[numQuestion]} numQuestion={numQuestion} />
				<AnswerQuizCard answers={questionsQuiz[numQuestion].answers} submitAnswer={submitAnswer} />
			</>}
			{quiz != null && questionsQuiz[numQuestion] == null && score &&
				<>
					<h1>{'Score : ' + score.score + "/" + scoreTotale}</h1>
					<NavLink to={'/'}>Retour</NavLink>
				</>
			}
		</div>
	);
}