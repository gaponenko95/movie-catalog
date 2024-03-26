import './MainForm.css';
import Button from '../Button/Button.jsx';

function MainForm({ placeholder, icon, buttonText, column, onSubmit }) {
	const formClass = `form ${column ? 'form--column' : ''}`;
	const inputClass = `form__input ${icon === 'search' ? 'form__input--icon' : ''}`;

	return (
		<form className={formClass} onSubmit={onSubmit}>
			<input
				className={inputClass}
				type='search'
				name='search'
				placeholder={placeholder}
			/>
			<Button text={buttonText} />
		</form>
	);
}

export default MainForm;
