import React, { useEffect, useState } from 'react';
import NavBar from '../../components/navbar/navbar';
import { Quiz } from '../../models/quiz';
import QuizItem from './quiz_item';

export default function JouerPage() {
  const [quiz, setQuiz] = useState<Quiz[]>([]);

  useEffect(() => {
    //TODO: get all quiz
    setQuiz([{ id: 1, name: 'Quiz 1', nbrQuestion: 3 }, { id: 2, name: 'Quiz 2', nbrQuestion: 5 }])
  }, []);

  return (
    <>
      <NavBar />
      <div>

        <h1>Choix du Quiz</h1>

        <div id='list-quiz'>
          {quiz.map((quiz) => (
            <QuizItem name={quiz.name} nbrQuestion={quiz.nbrQuestion} id={quiz.id} />
          ))}
        </div>
      </div>
    </>

  );
}