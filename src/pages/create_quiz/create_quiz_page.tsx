import React from 'react';
import NavBar from '../../components/navbar/navbar';
import './create_quiz_page.css';

export default function CreateQuizPage() {
  return (
    <>
      <NavBar />
      <div id='create-page'>
        <h1>Nouveau Quiz</h1>
        <form action="">
          <label >Thème - <input type="text" name="nameQuiz" id="nameQuiz" /></label>

          <label >Nouvelle Question <input type="text" name="newQuestion" id="nameQuiz" /></label>

          <div id='answers'>
            <label >1- <input type="text" name="answer1" id="answer1" /></label><input type="checkbox" name="answer1Good" id="answer1Good" />
            <label >2- <input type="text" name="answer2" id="answer2" /></label><input type="checkbox" name="answer2Good" id="answer2Good" />
            <label >3- <input type="text" name="answer3" id="answer3" /></label><input type="checkbox" name="answer3Good" id="answer3Good" />
            <label >4- <input type="text" name="answer4" id="answer4" /></label><input type="checkbox" name="answer4Good" id="answer4Good" />
          </div>

          <button>OK</button>
        </form>
        {/* TODO : card that sumUp all the questions */}


        <button>Valider</button>

      </div>
    </>

  );
}