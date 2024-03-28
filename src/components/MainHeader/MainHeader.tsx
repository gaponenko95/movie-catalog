import styles from './MainHeader.module.css';
import { MainHeaderProps } from './MainHeader.props';

function MainHeader({ children }: MainHeaderProps) {
	return <div className={styles.mainHeader}>{children}</div>;
}

export default MainHeader;
