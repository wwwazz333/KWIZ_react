import { AnswerQuiz } from "./answer_quiz";

export type QuestionQuiz = {
	id: number;
	quiz: number;
	question: string;
	answers: AnswerQuiz[];
};