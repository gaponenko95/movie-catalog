import './Button.css';

function Button({ text, onClick }) {
	return (
		<button type='submit' className='button' onClick={onClick}>
			{text}
		</button>
	);
}

export default Button;
