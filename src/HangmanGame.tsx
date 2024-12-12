import { useEffect, useState, useCallback } from 'react';
import words from './wordList.json';

import './HangmanGame.css';
import HangmanPicture from './HangmanPicture.tsx';
import HangmanWord from './HangmanWord.tsx';
import HangmanKeyboard from './HangmanKeyboard.tsx';

function getWord() {
	return words[Math.floor(Math.random() * words.length)]
}

const HangmanGame = () => {
	const [wordToGuess, setWordToGuess] = useState(getWord);
	const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
	const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));
	const isLoser = incorrectLetters.length >= 6;
	const isWinner = wordToGuess.split('').every(letter => guessedLetters.includes(letter));

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			const key = e.key
			if (key !== 'Enter') {
				return;
			}

			e.preventDefault()
			setGuessedLetters([])
			setWordToGuess(getWord())
		}

		document.addEventListener('keypress', handler)

		return () => {
			document.removeEventListener('keypress', handler)
		}
	}, []);

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			const key = e.key
			if (!key.match(/^[a-z]$/)) {
				return;
			}

			e.preventDefault()
			addGuessedLetter(key)
		}

		document.addEventListener('keypress', handler)

		return () => {
			document.removeEventListener('keypress', handler)
		}
	}, [guessedLetters]);

	const addGuessedLetter = useCallback(
		(letter: string) => {
			if (guessedLetters.includes(letter) || isLoser || isWinner) {
				return;
			}

			setGuessedLetters(currentLetters => [...currentLetters, letter]);
		},
		[guessedLetters, isLoser, isWinner]);

	return (
		<div className='hangman-game-wrapper'>
			<div className='hangman-game-result'>
				{isWinner && 'Winner! - Refresh to try again'}
				{isLoser && 'Nice Try - Refresh to try again'}
			</div>
			<HangmanPicture numberOfGuess={incorrectLetters.length} />
			<HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} reveal={isLoser} />
			<div className='hangman-keyboard-wrapper'>
				<HangmanKeyboard
					activeLetters={guessedLetters.filter(letter =>
						wordToGuess.includes(letter)
					)}
					inactiveLetters={incorrectLetters}
					addGuessedLetter={addGuessedLetter}
					disabled={isWinner || isLoser}
				/>
			</div>

		</div>
	)
}

export default HangmanGame;