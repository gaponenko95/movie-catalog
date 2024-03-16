import './NavItem.css';
import Link from '../Link/Link.jsx';

const iconMap = {
	login: '/login.svg',
	profile: '/profile.svg'
};

function renderIcon(icon) {
	if (iconMap[icon]) {
		return <img className='navigation__item-icon' src={iconMap[icon]} alt={icon} />;
	}
	return null;
}

function NavItem({ text, icon, counter, active, href }) {
	const isActive = active ? 'navigation__item--active' : '';

	return (
		<li className={`navigation__item ${isActive}`}>
			<Link href={href}>
				{text}
				{renderIcon(icon)}
				{counter && (
					<div className='counter-icon'>
						<div className='counter-icon__circle'>
							<span className='counter-icon__count'>2</span>
						</div>
					</div>
				)}
			</Link>
		</li>
	);
}

export default NavItem;
