import styles from './MainHeader.module.css';

function MainHeader({ children }) {
	return <div className={styles.mainHeader}>{children}</div>;
}

export default MainHeader;
