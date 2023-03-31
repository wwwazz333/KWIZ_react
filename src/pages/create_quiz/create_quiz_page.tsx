import React, { useEffect, useState } from 'react';
import NavBar from '../../components/navbar/navbar';
import { AnswerQuiz } from '../../models/answer_quiz';
import { apiUrl, fetchData, headerJson } from '../../models/api';
import { QuestionQuiz } from '../../models/question_quiz';
import { Quiz } from '../../models/quiz';
import AnswerItem from './answer_item';
import './create_quiz_page.css';

export default function CreateQuizPage() {
  const [questions, setQuestions] = useState<QuestionQuiz[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, set: (value: React.SetStateAction<string>) => void) => {
    set(event.target.value);
  }

  const [nameQuiz, setNameQuiz] = useState<string>("");

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



  const createAnswer = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    let answersTemp: AnswerQuiz[] = [];
    if (title != "") {
      for (let index = 0; index < answersInputs.length; index++) {
        const input = answersInputs[index];
        const checkbox = answersCheckbox[index];

        if (input != "") {
          answersTemp.push({
            id: -1,//il serron générer pas la bd
            questionId: -1, // il faudra mettre l'id de la question créer
            answer: input,
            isCorrect: checkbox ? 1 : 0
          });


        }
      }
      console.log(answersTemp);
      const quest = { id: -1, question: title, quizId: -1, answers: answersTemp }

      setQuestions(values => [...values, quest]);
      //@ts-ignore
      event.target.reset();
    } else {
      alert("Vous devez donner un titre à la question");
    }
  }


  const createQuiz = (event: React.MouseEvent<HTMLButtonElement>) => {
    const body = {
      quiz: {
        id: -1,
        name: nameQuiz,
        nbrQuestion: questions.length

      },
      questions: questions
    }


    fetch(`${apiUrl}/quiz/new`, {
      method: "post",
      headers: headerJson,
      body: JSON.stringify(body)
    })
      .then((response) => {
      })




  }



  return (
    <>
      <NavBar />
      <div id='create-page'>
        <h1>Nouveau Quiz</h1>
        <label >Thème - <input type="text" name="" id="nameQuiz" onChange={(e) => handleChange(e, setNameQuiz)} /></label>
        <form action="" onSubmit={createAnswer}>


          <label >Nouvelle Question <input type="text" name="" id="nameQuestion" onChange={(e) => handleChange(e, setTitle)} /></label>

          <div id='answers'>
            <div>
              <label >1- <input type="text" name="" id="" onChange={(e) => handleChange(e, setAnswer1)} /></label><input type="checkbox" name="" id="" onClick={handleClick1} checked={checked1} />
            </div>
            <div>
              <label >2- <input type="text" name="" id="" onChange={(e) => handleChange(e, setAnswer2)} /></label><input type="checkbox" name="" id="" onClick={handleClick2} checked={checked2} />
            </div>
            <div>
              <label >3- <input type="text" name="" id="" onChange={(e) => handleChange(e, setAnswer3)} /></label><input type="checkbox" name="" id="" onClick={handleClick3} checked={checked3} />
            </div>
            <div>
              <label >4- <input type="text" name="" id="" onChange={(e) => handleChange(e, setAnswer4)} /></label><input type="checkbox" name="" id="" onClick={handleClick4} checked={checked4} />
            </div>
          </div>

          <button type="submit">OK</button>
        </form>

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