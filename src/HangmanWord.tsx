import './HangmanWord.css';

const HangmanWord = () => {
	const word = 'test'
	const guessedLetters = ['t', 'e', 'g']
	return (
		<div className='hangman-word-wrapper'>
			{word.split('').map((letter, idx) => (
				<span key={idx} className='hangman-letter'>
					<span
						style={{
							visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden',
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