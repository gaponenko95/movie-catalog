import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

function Button({ children, ...props }: ButtonProps) {
	return (
		<button {...props} className={styles.button}>
			{children}
		</button>
	);
}

export default Button;
