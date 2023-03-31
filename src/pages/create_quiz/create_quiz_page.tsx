import React, { useState } from 'react';
import NavBar from '../../components/navbar/navbar';
import { AnswerQuiz } from '../../models/answer_quiz';
import { QuestionQuiz } from '../../models/question_quiz';
import './create_quiz_page.css';

export default function CreateQuizPage() {
  const [answers, setAnswers] = useState<QuestionQuiz[]>([]);

  const [title, setTitle] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }


  const answersInputs = [document.getElementById("answer1"), document.getElementById("answer2"), document.getElementById("answer3"), document.getElementById("answer4")];

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

        if (input && checkbox && input.textContent) {
          answersTemp.push({
            id: -1,//il serron générer pas la bd
            question: -1, // il faudra mettre l'id de la question créer
            answer: input.textContent,
            isCorrect: checkbox
          });
        }

      }

      answers.push({ id: -1, question: title, quizId: -1, answers: answersTemp })

      setAnswers(answers);
    }else{
      alert("Vous devez donner un titre à la question");
    }
  }




  return (
    <>
      <NavBar />
      <div id='create-page'>
        <h1>Nouveau Quiz</h1>
        <form action="">
          <label >Thème - <input type="text" name="nameQuiz" id="nameQuiz" /></label>

          <label >Nouvelle Question <input type="text" name="newQuestion" id="newQuestion" onChange={handleChange} /></label>

          <div id='answers'>
            <label >1- <input type="text" name="answer1" id="answer1" /></label><input type="checkbox" name="answer1Good" id="answer1Good" onClick={handleClick1} checked={checked1} />
            <label >2- <input type="text" name="answer2" id="answer2" /></label><input type="checkbox" name="answer2Good" id="answer2Good" onClick={handleClick2} checked={checked2} />
            <label >3- <input type="text" name="answer3" id="answer3" /></label><input type="checkbox" name="answer3Good" id="answer3Good" onClick={handleClick3} checked={checked3} />
            <label >4- <input type="text" name="answer4" id="answer4" /></label><input type="checkbox" name="answer4Good" id="answer4Good" onClick={handleClick4} checked={checked4} />
          </div>

          <button onClick={createAnswer}>OK</button>
        </form>
        {/* TODO : card that sumUp all the questions */}


        <button>Valider</button>

      </div>
    </>

  );
}