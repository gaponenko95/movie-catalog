import './MainForm.css';
import Button from '../Button/Button.jsx';

function MainForm({ placeholder, icon, buttonText, column, onSubmit }) {
	const inputClass = icon === 'search' ? 'main-form__input icon' : 'main-form__input';

	const handleSubmit = e => {
		e.preventDefault();
		const value = new FormData(e.target).get('search');
	};

	return (
		<form className={`main-form ${column ? 'column' : ''}`} onSubmit={onSubmit}>
			<div className='main-form__input-wrapper'>
				<input
					type='search'
					name='search'
					placeholder={placeholder}
					className={inputClass}
				/>
				{icon === 'search' && (
					<img className='main-form__icon' src='/search.svg' alt='Search' />
				)}
			</div>
			<Button text={buttonText} />
		</form>
	);
}

export default MainForm;
