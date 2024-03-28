import styles from './Text.module.css';
import cn from 'classnames';
import { TextProps } from './Text.props'

function Text({ children, small }: TextProps) {
	const textClass = cn(styles.text, {
		[styles.textSmall]: small
	});

	return <p className={textClass}>{children}</p>;
}

export default Text;
