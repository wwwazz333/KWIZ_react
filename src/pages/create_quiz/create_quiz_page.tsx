import React, { useEffect, useState } from 'react';
import NavBar from '../../components/navbar/navbar';
import { AnswerQuiz } from '../../models/answer_quiz';
import { QuestionQuiz } from '../../models/question_quiz';
import { Quiz } from '../../models/quiz';
import AnswerItem from './answer_item';
import './create_quiz_page.css';

export default function CreateQuizPage() {
  const [questions, setQuestions] = useState<QuestionQuiz[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, set: (value: React.SetStateAction<string>) => void) => {
    set(event.target.value);
  }

  const [title, setTitle] = useState<string>("");

  const [answer1, setAnswer1] = useState<string>("");
  const [answer2, setAnswer2] = useState<string>("");
  const [answer3, setAnswer3] = useState<string>("");
  const [answer4, setAnswer4] = useState<string>("");
  const answersInputs = [answer1, answer2, answer3, answer4];


  const [checked1, setChecked1] = useState(false)
  const handleClick1 = () => setChecked1(!checked1)

  const [checked2, setChecked2] = useState(false)
  const handleClick2 = () => setChecked2(!checked2)

  const [checked3, setChecked3] = useState(false)
  const handleClick3 = () => setChecked3(!checked3)

  const [checked4, setChecked4] = useState(false)
  const handleClick4 = () => setChecked4(!checked4)

  const answersCheckbox = [checked1, checked2, checked3, checked4];

  const createAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    let answersTemp: AnswerQuiz[] = [];
    if (title != "") {
      for (let index = 0; index < answersInputs.length; index++) {
        const input = answersInputs[index];
        const checkbox = answersCheckbox[index];

        if (input && checkbox) {
          answersTemp.push({
            id: -1,//il serron générer pas la bd
            question: -1, // il faudra mettre l'id de la question créer
            answer: input,
            isCorrect: checkbox
          });
        }
      }
      questions.push({ id: -1, question: title, quizId: -1, answers: answersTemp })

      setQuestions(questions);
    } else {
      alert("Vous devez donner un titre à la question");
    }
  }


  const createQuiz = (event: React.MouseEvent<HTMLButtonElement>) => {
    const quiz: Quiz = {
      id: -1,
      name: "test",
      nbrQueston: questions.length
    }
    //TODO : create quiz in db

    for (const question of questions) {
      //TODO : create questions in db
    }
  }



  return (
    <>
      <NavBar />
      <div id='create-page'>
        <h1>Nouveau Quiz</h1>
        <form action="">
          <label >Thème - <input type="text" name="nameQuiz" id="nameQuiz" /></label>

          <label >Nouvelle Question <input type="text" name="newQuestion" id="newQuestion" onChange={(e) => handleChange(e, setTitle)} /></label>

          <div id='answers'>
            <label >1- <input type="text" name="" id="" onChange={(e) => handleChange(e, setAnswer1)} /></label><input type="checkbox" name="" id="" onClick={handleClick1} checked={checked1} />
            <label >2- <input type="text" name="" id="" onChange={(e) => handleChange(e, setAnswer2)} /></label><input type="checkbox" name="" id="" onClick={handleClick2} checked={checked2} />
            <label >3- <input type="text" name="" id="" onChange={(e) => handleChange(e, setAnswer3)} /></label><input type="checkbox" name="" id="" onClick={handleClick3} checked={checked3} />
            <label >4- <input type="text" name="" id="" onChange={(e) => handleChange(e, setAnswer4)} /></label><input type="checkbox" name="" id="" onClick={handleClick4} checked={checked4} />
          </div>

          <button onClick={createAnswer}>OK</button>
        </form>
        {/* TODO : card that sumUp all the questions */}

        <ul>
          {questions.map((answer) => (
            <AnswerItem question={answer.question} />
          ))}
        </ul>



        <button onClick={createQuiz}>Valider</button>

      </div>
    </>

  );
}