import styles from './Logo.module.css';

function Logo() {
	return <img className={styles.logo} src='/logo.svg' alt='Логотип' />;
}

export default Logo;
