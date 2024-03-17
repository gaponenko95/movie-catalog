import styles from './Navigation.module.css';

function Navigation({ children }) {
	return (
		<nav>
			<ul className={styles.navigationList}>{children}</ul>
		</nav>
	);
}

export default Navigation;
