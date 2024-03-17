import styles from './MainTitle.module.css';

function Title({ text }) {
	return (
		<>
			<h1 className={styles.mainTitle}>{text}</h1>
		</>
	);
}

export default Title;
