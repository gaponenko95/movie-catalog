import cn from 'classnames';

import styles from './Form.module.css';
import { FormProps } from './Form.props';

function Form({ children, column, ...props }: FormProps) {
	const formClass = cn(styles.form, column && styles.formColumn);

	return (
		<form {...props} className={formClass}>
			{children}
		</form>
	);
}

export default Form;
