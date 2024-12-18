import './HangmanWord.css';

type HangmanWordProps = {
	guessedLetters: string[],
	wordToGuess: string
	reveal?: boolean
}

const HangmanWord = ({ guessedLetters, wordToGuess, reveal = false }: HangmanWordProps) => {

	return (
		<div className='hangman-word-wrapper'>
			{wordToGuess.split('').map((letter, idx) => (
				<span key={idx} className='hangman-letter'>
					<span
						style={{
							visibility: guessedLetters.includes(letter) || reveal ? 'visible' : 'hidden',
							color:
								!guessedLetters.includes(letter) && reveal ? 'red' : 'black',
						}}
					>
						{letter}
					</span>
				</span>
			))}
		</div>
	);
}

export default HangmanWord;