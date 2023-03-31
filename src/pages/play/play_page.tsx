import React, { useEffect } from 'react';
import { Quiz } from '../../models/quiz';
import QuizItem from './quiz_item';

export default function JouerPage() {
  const [quiz, setQuiz] = React.useState<Quiz[]>([]);

  useEffect(() => {
    setQuiz([{ id:1, name: 'Quiz 1' }, { id:2, name: 'Quiz 2'}])
  }, []);

  return (
    <div>
      <h1>Choix du Quiz</h1>

      <div id='list-quiz'>
        {quiz.map((quiz) => (
          <QuizItem />
        ))}
      </div>
    </div>
  );
}