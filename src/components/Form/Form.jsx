import cn from 'classnames';
import styles from './Form.module.css';

function Form({ children, column, ...props }) {
	const formClass = cn(styles.form, column && styles.formColumn);

	return (
		<form {...props} className={formClass}>
			{children}
		</form>
	);
}

export default Form;
