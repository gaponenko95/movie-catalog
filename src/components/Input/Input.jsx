import { forwardRef } from 'react';
import cn from 'classnames';
import styles from './Input.module.css';

const Input = forwardRef(function Input({ icon, isValid = true, ...props }, ref) {
	const inputClass = cn(styles.input, {
		[styles.invalid]: !isValid,
		[styles.inputIcon]: icon === 'search'
	});

	return <input {...props} ref={ref} className={inputClass} />;
});

export default Input;
