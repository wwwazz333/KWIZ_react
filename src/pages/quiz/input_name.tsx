import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { QuestionQuiz } from '../../models/question_quiz';
import { Quiz } from '../../models/quiz';


type InputNameProps = {
	submitAnswer: (newName: string) => void

}

export default function InputName(props: InputNameProps) {
	const [name, setName] = useState<string>("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>, set: (value: React.SetStateAction<string>) => void) => {
		set(event.target.value);
	}


	const handleSubmit = () => {
		props.submitAnswer(name);
	}

	return (
		<div>
			<h1>Entrez votre nom</h1>
			<input type="text" onChange={(e) => handleChange(e, setName)} />

			<button onClick={handleSubmit}>Valider</button>
		</div>
	);
}