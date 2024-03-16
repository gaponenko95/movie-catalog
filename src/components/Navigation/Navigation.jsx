import './Navigation.css';

function Navigation({ children }) {
	return (
		<nav className='navigation'>
			<ul className='navigation__list'>{children}</ul>
		</nav>
	);
}

export default Navigation;
