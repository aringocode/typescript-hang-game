import {useState} from "react";
import words from "./wordList.json";

import './HangmanGame.css';
import HangmanPicture from "./HangmanPicture.tsx";
import HangmanWord from "./HangmanWord.tsx";
import HangmanKeyboard from "./HangmanKeyboard.tsx";

const HangmanGame = () => {
	const [wordToGuess, setWordToGuess] = useState(() => {
		return words[Math.floor(Math.random() * words.length)]
	});

	const [guessedLetters, setGuessedLetters] = useState<string[]>([])

	return (
		<div className='hangman-game-wrapper'>
			<div className="hangman-game-result">Lose Win</div>
			<HangmanPicture />
			<HangmanWord />
			<div className='hangman-keyboard-wrapper'>
				<HangmanKeyboard />
			</div>

		</div>
	)
}

export default HangmanGame;