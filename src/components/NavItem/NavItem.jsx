import './NavItem.css';
import Link from '../Link/Link.jsx';

const iconMap = {
	login: '/login.svg',
	profile: '/profile.svg'
};

function NavItem({ text, icon, counter, active, href }) {
	const isActive = active ? 'navigation__item--active' : '';

	return (
		<li className={`navigation__item ${isActive}`}>
			<Link href={href}>
				{text}
				{icon && (
					<img
						className='navigation__item-icon'
						src={iconMap[icon]}
						alt={icon}
					/>
				)}
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
