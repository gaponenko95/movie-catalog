import styles from './MainForm.module.css';
import cn from 'classnames';
import Button from '../Button/Button';

function MainForm({ placeholder, icon, buttonText, column, onSubmit }) {
	const formClass = cn(styles.form, column && styles.formColumn);
	const inputClass = cn(styles.formInput, icon === 'search' && styles.formInputIcon);

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
