import classNames from 'classnames';
import { Link } from 'react-router-dom';

import styles from './NavItem.module.css';
import { NavItemProps } from './NavItem.props';

// const iconMap = {
// 	login: '/login.svg',
// 	profile: '/profile.svg'
// };

function NavItem({ children, icon, counter, to, onClick }: NavItemProps) {
	return (
		<li className={classNames(styles.navItem)}>
			<Link to={to} onClick={onClick}>
				{children}
				{icon && <img className={styles.navigationItemIcon} src={icon} alt={icon} />}
				{counter && (
					<div className={styles.counterIcon}>
						<div className={styles.counterIconCircle}>
							<span className={styles.counterIconCount}>2</span>
						</div>
					</div>
				)}
			</Link>
		</li>
	);
}

export default NavItem;
