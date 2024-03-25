import cn from 'classnames';
import { forwardRef } from 'react';

import styles from './Input.module.css';
import { InputProps } from './Input.props';

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ icon, isValid = true, ...props }, ref) {
	const inputClass = cn(styles.input, {
		[styles.invalid]: !isValid,
		[styles.inputIcon]: icon === 'search'
	});

	return <input {...props} ref={ref} className={inputClass} />;
});

export default Input;
