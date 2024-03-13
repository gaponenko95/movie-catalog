import './NavItem.css';
import Link from '../Link/Link.jsx';

function NavItem({ children, icon, counter, active }) {
	const className = `navigation__item ${active ? 'navigation__item--active' : ''}`;
	let iconElement;
	const counterIcon = <div className="counter-icon">
		<div className="counter-icon__circle">
			<span className="counter-icon__count">2</span>
		</div>
	</div>;


	if (icon === 'login') {
		iconElement = <img className="navigation__item-icon" src="/login.svg" alt="Логин"/>;
	} else if (icon === 'profile') {
		iconElement = <img className="navigation__item-icon" src="/profile.svg" alt="Профиль"/>;
	}

	return (
		<li className={className}>
			<Link>
				{children}
				{iconElement}
				{counter ? counterIcon : null}
			</Link>
		</li>
	);
}

export default NavItem;
