import './HangmanPicture.css';

const HEAD = (
	<div className='hangman-head' />
);

const BODY = (
	<div className='hangman-body' />
);

const RIGHT_ARM = (
	<div className='hangman-right-arm' />
);

const LEFT_ARM = (
	<div className='hangman-left-arm' />
);

const RIGHT_LEG = (
	<div className='hangman-right-leg' />
);

const LEFT_LEG = (
	<div className='hangman-left-leg' />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanPictureProps = {
	numberOfGuess: number
}

const HangmanPicture = ({ numberOfGuess }: HangmanPictureProps) => {

	return (
		<div className='hangman-picture-wrapper'>
			{BODY_PARTS.slice(0, numberOfGuess)}
			<div className='hangman-gallows-vertical' />
			<div className='hangman-gallows' />
			<div className='hangman-vertical' />
			<div className='hangman-baseplate' />
		</div>
	)
}

export default HangmanPicture;