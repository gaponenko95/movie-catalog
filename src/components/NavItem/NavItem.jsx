import './NavItem.css';
import Link from '../Link/Link.jsx';

function NavItem({ children, icon, counter, active, href }) {
	const isActive = active ? 'navigation__item--active' : '';
	let iconElement;

	switch (icon) {
	case 'login':
		iconElement = <img className="navigation__item-icon" src="/login.svg" alt="Login"/>;
		break;
	case 'profile':
		iconElement = <img className="navigation__item-icon" src="/profile.svg" alt="Profile"/>;
		break;
	default:
		iconElement = null;
	}

	return (
		<li className={`navigation__item ${isActive}`}>
			<Link href={href}>
				{children}
				{iconElement}
				{counter ?
					<div className="counter-icon">
						<div className="counter-icon__circle">
							<span className="counter-icon__count">2</span>
						</div>
					</div>
					: null
				}
			</Link>
		</li>
	);
}

export default NavItem;
