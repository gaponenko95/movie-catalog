import './MainForm.css';
import Button from '../Button/Button.jsx';
import { useState } from 'react';

function MainForm({ placeholder, icon, buttonText, column }) {
	const [ value, setValue ] = useState('');
	const inputClass = icon === 'search' ? 'main-form__input icon' : 'main-form__input';

	const getValue = (e) => {
		e.preventDefault();
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(value);
	};

	return (
		<form className={column ? 'main-form column' : 'main-form'} onSubmit={handleSubmit}>
			<div className="main-form__input-wrapper">
				<input
					type='text'
					name='search'
					placeholder={ placeholder }
					className={ inputClass }
					value={value}
					onChange={getValue}
				/>
				{ icon === 'search' && <img className="main-form__icon" src="/search.svg" alt="Поиск"/> }
			</div>
			<Button type={'submit'} text={buttonText}/>
		</form>
	);
}

export default MainForm;
