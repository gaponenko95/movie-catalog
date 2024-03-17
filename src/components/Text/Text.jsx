import styles from './Text.module.css';
import cn from 'classnames';

function Text({ children, small }) {
	const textClass = cn(styles.text, {
		[styles.textSmall]: small
	});

	return <p className={textClass}>{children}</p>;
}

export default Text;
