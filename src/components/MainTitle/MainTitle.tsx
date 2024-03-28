import cn from 'classnames';

import styles from './MainTitle.module.css';
import { MainTitleProps } from './MainTitle.props';

function Title({ children, small }: MainTitleProps) {
	return (
		<>
			<h1 className={cn(styles.mainTitle, { [styles.small]: small })}>{children}</h1>
		</>
	);
}

export default Title;
