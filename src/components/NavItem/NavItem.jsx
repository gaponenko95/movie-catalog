import styles from './NavItem.module.css';
import classNames from 'classnames';
import Link from '../Link/Link.jsx';

const iconMap = {
	login: '/login.svg',
	profile: '/profile.svg'
};

function renderIcon(icon) {
	if (iconMap[icon]) {
		return <img src={iconMap[icon]} alt={icon} />;
	}
	return null;
}

function NavItem({ text, icon, counter, active, href, onClick }) {
	const isActive = active ? styles.navItemActive : '';

	return (
		<li className={classNames(styles.navItem, isActive)}>
			<Link href={href} onClick={onClick}>
				{text}
				{renderIcon(icon)}
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
