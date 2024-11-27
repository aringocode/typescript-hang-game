import './HangmanPicture.css';

const HangmanPicture = () => {

	return (
		<div className='hangman-picture-wrapper'>
			<div className='hangman-gallows-vertical' />
			<div className='hangman-gallows' />
			<div className='hangman-vertical' />
			<div className='hangman-baseplate' />
		</div>
	)
}

export default HangmanPicture;