import styles from './Navigation.module.css';
import { NavigationProps } from './Navigation.props';

function Navigation({ children }: NavigationProps) {
	return (
		<nav>
			<ul className={styles.navigationList}>{children}</ul>
		</nav>
	);
}

export default Navigation;
