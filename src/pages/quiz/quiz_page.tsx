import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { AnswerQuiz } from '../../models/answer_quiz';
import { apiUrl, fetchData, headerJson } from '../../models/api';
import { QuestionQuiz } from '../../models/question_quiz';
import { Quiz } from '../../models/quiz';
import { ScoreQuiz } from '../../models/score_quiz';
import AnswerQuizCard from './answer_quiz_card';
import InputName from './input_name';
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
	const [name, setName] = useState<string>();

	const [numQuestion, setNumQuestion] = useState<number>(0);
	const [quiz, setQuiz] = useState<Quiz>();
	const [score, setScore] = useState<ScoreQuiz>();
	const [questionsQuiz, setQuestionQuiz] = useState<QuestionQuiz[]>([]);

	const [scoreTotale, setScoreTotale] = useState<number>(0);

	const { quizId } = useParams();


	useEffect(() => {
		//TODO: create ScoreQuiz and set it
		setScore({ id: -1, quizId: quiz?.id ?? 0, score: score?.score ?? 0, name: name ?? "" });
	}, [quiz, name]);

	useEffect(() => {
		fetchData<Quiz>(`${apiUrl}/quiz/${quizId}`).then((quiz) => {
			setQuiz(quiz);
		});
	}, []);




	useEffect(() => {
		fetchData<QuestionQuiz[]>(`${apiUrl}/question_quiz/for/${quizId}`).then((questions) => {
			setQuestionQuiz(questions);
		});
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


	const submitScore = (): boolean => {
		if (score) {
			console.log("send score");

			fetch(`${apiUrl}/score_quiz/new`, {
				method: "post",
				headers: headerJson,
				body: JSON.stringify(score)
			})
				.then((response) => {
				});
			return true;
		} else {
			return false;
		}
	}




	const submitAnswer = (answers: AnswerQuiz[]) => {
		if (score) {
			console.log("score");

			score.score += calculeScore(answers);
			setScore(score);
			setNumQuestion(numQuestion + 1);
		}
		if (numQuestion === (quiz?.nbrQueston ?? 0) - 1) {
			submitScore();
		}
	}

	return (
		<div>
			{name == null && <InputName submitAnswer={setName} />}
			{name != null && quiz == null && score && <h1>Pas de quiz</h1>}
			{name != null && quiz != null && questionsQuiz[numQuestion] && score && <>
				<QuestionQuizCard quiz={quiz} question={questionsQuiz[numQuestion]} numQuestion={numQuestion} />
				<AnswerQuizCard answers={questionsQuiz[numQuestion].answers} submitAnswer={submitAnswer} />
			</>}
			{name != null && quiz != null && questionsQuiz[numQuestion] == null && score &&
				<>
					<h1>{'Score : ' + score.score + "/" + scoreTotale}</h1>
					<NavLink to={'/'}>Retour</NavLink>
				</>
			}
		</div>
	);
}