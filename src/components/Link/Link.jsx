import styles from './Link.module.css';

function Link({ children, href, onClick }) {
	return (
		<a className={styles.link} href={href} onClick={onClick}>
			{children}
		</a>
	);
}

export default Link;
