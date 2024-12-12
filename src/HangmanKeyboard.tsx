import letters from './letters.json';

import './HangmanKeyboard.css';

type KeyboardProps = {
	activeLetters: string[]
	inactiveLetters: string[]
	addGuessedLetter: (letter: string) => void
	disabled?: boolean
}

const HangmanKeyboard = ({ activeLetters, inactiveLetters, addGuessedLetter, disabled = false }: KeyboardProps) => {
	return (
		<div className='hangman-keyboard'>
			{letters.map((key) => {
				const isActive = activeLetters.includes(key);
				const isInactive = inactiveLetters.includes(key);
				return (
					<button
						onClick={() => addGuessedLetter(key)}
						className={`hangman-keyboard-btn ${isActive ? 'active' : ''} ${isInactive ? 'inactive' : ''}`}
						disabled={isInactive || isActive || disabled}
						key={key}
					>
						{key}
					</button>
				)
			})}
		</div>
	)
}

export default HangmanKeyboard;
