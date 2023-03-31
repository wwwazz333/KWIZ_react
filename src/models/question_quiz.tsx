import { AnswerQuiz } from "./answer_quiz";

export type QuestionQuiz = {
	id: number;
	quizId: number;
	question: string;
	answers: AnswerQuiz[];
};